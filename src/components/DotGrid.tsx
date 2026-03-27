import { useEffect, useRef } from 'react';

interface DotGridProps {
  dotColor?: string;
  backgroundColor?: string;
  dotSpacing?: number;
  dotSize?: number;
  animationSpeed?: number;
  className?: string;
}

export default function DotGrid({
  dotColor = '#7B7481',
  dotSpacing = 30,
  dotSize = 1.5,
  animationSpeed = 1,
  className = '',
}: DotGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = dotColor;

      const cols = Math.ceil(canvas.width / dotSpacing) + 1;
      const rows = Math.ceil(canvas.height / dotSpacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * dotSpacing;
          const y = j * dotSpacing;

          const offsetX = Math.sin((time * animationSpeed + j * 0.5) * 0.02) * 2;
          const offsetY = Math.cos((time * animationSpeed + i * 0.3) * 0.02) * 2;

          const pulseScale = 1 + Math.sin((time * animationSpeed + i + j) * 0.03) * 0.3;
          const size = dotSize * pulseScale;

          ctx.beginPath();
          ctx.arc(x + offsetX, y + offsetY, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time += 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotColor, dotSpacing, dotSize, animationSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        opacity: 0.5,
      }}
    />
  );
}
