'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  originalSize: number;
  opacity: number;
  update(): void;
  draw(): void;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Background particles
    const particles: Particle[] = [];
    const particleCount = 30; // Increased from 15 to 30 for more interest
    const connectionDistance = 180; // Adjusted for more connections

    const canvasEl = canvas; // non-null reference for inner classes and closures

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      originalSize: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvasEl.width;
        this.y = Math.random() * canvasEl.height;
        this.originalSize = Math.random() * 2 + 1; // Slightly larger
        this.size = this.originalSize;
        this.speedX = (Math.random() - 0.5) * 0.8; // Slightly faster
        this.speedY = (Math.random() - 0.5) * 0.8; // Slightly faster

        // Use the black and white color palette with varying opacity
        const bwColors = [
          'rgba(0, 0, 0, 0.4)',      // black
          'rgba(50, 50, 50, 0.3)',   // dark gray
          'rgba(100, 100, 100, 0.3)' // medium gray
        ];
        this.color = bwColors[Math.floor(Math.random() * bwColors.length)];
        this.opacity = parseFloat(this.color.match(/[\d.]+(?=\))/g)?.[0] || '0.4');
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Gentle pulsing effect
        this.size = this.originalSize + Math.sin(Date.now() * 0.001) * 0.5;

        if (this.x > canvasEl.width || this.x < 0) {
          this.speedX *= -1;
        }
        if (this.y > canvasEl.height || this.y < 0) {
          this.speedY *= -1;
        }
      }

      draw() {
        if (!ctx) return;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        // Add glow effect
        ctx.shadowColor = this.color.replace('rgba', 'rgb').replace(/\)[\d.]+\)/, ')');
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Draw connections between close particles (more visible)
    const drawConnections = () => {
      if (!ctx) return;

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 0.15 * (1 - distance / connectionDistance); // More visible
            const gradient = ctx.createLinearGradient(
              particles[a].x, particles[a].y,
              particles[b].x, particles[b].y
            );
            gradient.addColorStop(0, particles[a].color);
            gradient.addColorStop(1, particles[b].color);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5; // Slightly thicker
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Draw subtle grid lines for depth
    const drawGrid = () => {
      if (!ctx) return;

      const gridSize = 100;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)'; // Very subtle grid in black and white
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Animation loop
    const animate = () => {
      if (!ctx) return;

      // Clear with the white background (with slight transparency for trails)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'; // white with low alpha
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle grid
      drawGrid();

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      drawConnections();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'linear-gradient(to bottom, #ffffff, #f0f0f0, #ffffff)' }}
    />
  );
};

export default AnimatedBackground;