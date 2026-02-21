import { useCallback, useEffect, useRef } from 'react';

export default function RunnerGanme() {
  interface GameState {
    running: boolean;
    score: number;
    highScore: number;
    player: { x: number; y: number; vy: number; w: number; h: number; grounded: boolean };
    obstacles: { x: number; w: number; h: number }[];
    frame: number;
    speed: number;
    groundY: number;
  }
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<GameState>({
    running: false,
    score: 0,
    highScore: 0,
    player: { x: 60, y: 0, vy: 0, w: 20, h: 24, grounded: true },
    obstacles: [],
    frame: 0,
    speed: 0.8,
    groundY: 0,
  });

  const startGame = useCallback(() => {
    const g = gameRef.current;
    g.running = true;
    g.score = 0;
    g.speed = 0.8;
    g.obstacles = [];
    g.frame = 0;
    g.player.vy = 0;
    g.player.grounded = true;
  }, []);

  const jump = useCallback(() => {
    const g = gameRef.current;
    if (!g.running) {
      startGame();
      return;
    }
    if (g.player.grounded) {
      g.player.vy = -7;
      g.player.grounded = false;
    }
  }, [startGame]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const W = canvas.width;
    const H = canvas.height;
    const groundY = H - 32;
    gameRef.current.groundY = groundY;

    const handleKey = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener('keydown', handleKey);

    let raf: number;

    const loop = () => {
      const g = gameRef.current;
      ctx.clearRect(0, 0, W, H);

      ctx.strokeStyle = '#2a2a2a';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(W, groundY);
      ctx.stroke();

      ctx.fillStyle = '#1E1E24';
      for (let i = 0; i < W; i += 24) {
        const offset = g.running ? (g.frame * g.speed) % 24 : 0;
        ctx.fillRect(i - offset, groundY + 8, 2, 2);
      }

      if (!g.running) {
        ctx.fillStyle = '#7A7790';
        ctx.font = "13px 'JetBrains Mono', monospace";
        ctx.textAlign = 'center';
        ctx.fillText('Press SPACE to play', W / 2, H / 2 - 8);

        if (g.highScore > 0) {
          ctx.fillStyle = '#4A475A';
          ctx.font = "11px 'JetBrains Mono', monospace";
          ctx.fillText('HIGH ' + String(g.highScore).padStart(5, '0'), W / 2, H / 2 + 14);
        }

        ctx.fillStyle = '#EDEBE6';
        ctx.fillRect(g.player.x, groundY - g.player.h, g.player.w, g.player.h);
        ctx.fillStyle = '#0C0C0E';
        ctx.fillRect(g.player.x + 14, groundY - g.player.h + 6, 3, 3);

        raf = requestAnimationFrame(loop);
        return;
      }

      g.frame++;
      g.score = Math.floor(g.frame / 10);
      if (g.frame % 120 === 0) g.speed = Math.min(g.speed + 0.05, 2.5);

      const p = g.player;
      p.vy += 0.22;
      p.y += p.vy;
      if (p.y >= 0) {
        p.y = 0;
        p.vy = 0;
        p.grounded = true;
      }

      const lastOb = g.obstacles[g.obstacles.length - 1];
      const minGap = Math.max(280 - g.speed * 10, 180);
      if (!lastOb || lastOb.x < W - minGap - Math.random() * 120) {
        const tall = Math.random() > 0.6;
        g.obstacles.push({
          x: W + 20,
          w: tall ? 12 : 16,
          h: tall ? 36 + Math.random() * 12 : 20 + Math.random() * 10,
        });
      }

      g.obstacles = g.obstacles.filter((o) => o.x + o.w > -10);
      const playerBottom = groundY - p.h;

      for (const o of g.obstacles) {
        o.x -= g.speed;

        ctx.fillStyle = '#3E3C4A';
        ctx.fillRect(o.x, groundY - o.h, o.w, o.h);
        ctx.strokeStyle = '#5A586A';
        ctx.lineWidth = 1;
        ctx.strokeRect(o.x, groundY - o.h, o.w, o.h);

        const px = p.x;
        const py = playerBottom + p.y;
        const pw = p.w;
        const ph = p.h;
        if (px + pw - 4 > o.x && px + 4 < o.x + o.w && py + ph > groundY - o.h && py < groundY) {
          g.running = false;
          if (g.score > g.highScore) g.highScore = g.score;
        }
      }

      const drawY = playerBottom + p.y;
      ctx.fillStyle = '#EDEBE6';
      ctx.fillRect(p.x, drawY, p.w, p.h);
      ctx.fillStyle = '#0C0C0E';
      ctx.fillRect(p.x + 14, drawY + 6, 3, 3);

      if (p.grounded) {
        const legFrame = Math.floor(g.frame / 18) % 2;
        ctx.fillStyle = '#EDEBE6';
        if (legFrame === 0) {
          ctx.fillRect(p.x + 4, drawY + p.h, 4, 4);
          ctx.fillRect(p.x + 12, drawY + p.h - 2, 4, 2);
        } else {
          ctx.fillRect(p.x + 4, drawY + p.h - 2, 4, 2);
          ctx.fillRect(p.x + 12, drawY + p.h, 4, 4);
        }
      }

      ctx.fillStyle = '#7A7790';
      ctx.font = "12px 'JetBrains Mono', monospace";
      ctx.textAlign = 'right';
      ctx.fillText(String(g.score).padStart(5, '0'), W - 16, 28);

      if (g.highScore > 0) {
        ctx.fillStyle = '#3E3C4A';
        ctx.font = "11px 'JetBrains Mono', monospace";
        ctx.fillText('HI ' + String(g.highScore).padStart(5, '0'), W - 90, 28);
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('keydown', handleKey);
      cancelAnimationFrame(raf);
    };
  }, [jump]);

  return (
    <div className='mb-[clamp(56px,10vh,96px)]'>
      <div className='flex w-full items-baseline gap-4 border-b border-rule pb-4'>
        <span className='font-display text-[clamp(24px,3vw,32px)] font-semibold tracking-[-0.02em] text-primary'>Take a break</span>
        <span className='font-mono text-[12px] tracking-[0.06em] text-accent'>SPACE to jump</span>
      </div>
      <canvas ref={canvasRef} width={800} height={160} onClick={jump} className='block h-auto w-full cursor-pointer border border-rule bg-canvas' />
    </div>
  );
}
