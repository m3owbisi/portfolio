'use client';

import { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 80;
const FRAME_INTERVAL = 80; // ~12.5fps — smooth enough for 80 sampled frames

function getFramePath(index: number): string {
  // the sampled frames kept every 3rd: 0, 3, 6, 9, ...
  const originalIndex = index * 3;
  const padded = String(originalIndex).padStart(3, '0');
  return `/images/avatar/frame_${padded}_delay-0.041s.webp`;
}

export default function HeroAvatar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function loadFrames() {
      const frames: HTMLImageElement[] = [];
      let loadedCount = 0;

      const promises = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            if (!cancelled) setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
            resolve(img);
          };
          img.onerror = reject;
          img.src = getFramePath(i);
        });
      });

      try {
        const loadedFrames = await Promise.all(promises);
        if (!cancelled) {
          framesRef.current = loadedFrames;
          setLoaded(true);
        }
      } catch (err) {
        console.error('failed to load avatar frames:', err);
      }
    }

    loadFrames();
    return () => { cancelled = true; };
  }, []);

  // animation loop
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // set canvas resolution
    const firstFrame = framesRef.current[0];
    const aspectRatio = firstFrame.naturalWidth / firstFrame.naturalHeight;
    const displayWidth = canvas.clientWidth;
    const displayHeight = displayWidth / aspectRatio;

    canvas.width = displayWidth * window.devicePixelRatio;
    canvas.height = displayHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    let animationId: number;
    let lastTime = 0;

    function animate(timestamp: number) {
      if (!ctx) return;
      if (timestamp - lastTime >= FRAME_INTERVAL) {
        lastTime = timestamp;
        const frame = framesRef.current[currentFrameRef.current];
        if (frame) {
          ctx.clearRect(0, 0, canvas!.width, canvas!.height);
          ctx.drawImage(frame, 0, 0, displayWidth, displayHeight);
        }
        currentFrameRef.current = (currentFrameRef.current + 1) % TOTAL_FRAMES;
      }
      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [loaded]);

  return (
    <div ref={containerRef} className="hero-avatar-container">
      {/* loading state */}
      {!loaded && (
        <div className="hero-avatar-loader">
          <div className="hero-avatar-loader-bar">
            <div
              className="hero-avatar-loader-fill"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <span className="font-mono text-xs text-text-muted">
            loading avatar... {loadProgress}%
          </span>
        </div>
      )}

      {/* canvas */}
      <canvas
        ref={canvasRef}
        className={`hero-avatar-canvas ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* ambient glow behind avatar */}
      <div className="hero-avatar-glow" aria-hidden="true" />
    </div>
  );
}
