'use client';

import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create particles
    const particles: any[] = [];
    const particleCount = 60; // Reduced for better visibility

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5, // Slightly smaller for subtle effect
        speedX: (Math.random() - 0.5) * 0.4, // Slower for better visibility
        speedY: (Math.random() - 0.5) * 0.4,
        color: `rgba(200, 200, 200, ${Math.random() * 0.3 + 0.1})`, // Darker color range
        originalX: Math.random() * canvas.width,
        originalY: Math.random() * canvas.height,
        oscillation: {
          x: Math.random() * Math.PI * 2,
          y: Math.random() * Math.PI * 2,
          amplitude: Math.random() * 25 + 5, // Moderate oscillation
          frequency: Math.random() * 0.015 + 0.008, // Moderate oscillation
        }
      });
    }

    let animationFrameId: number;

    const render = () => {
      // Clear canvas with black background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle grid pattern
      ctx.strokeStyle = 'rgba(50, 50, 50, 0.1)';
      ctx.lineWidth = 0.3;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += 70) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 70) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach(particle => {
        // Oscillate position for more organic movement
        particle.oscillation.x += particle.oscillation.frequency;
        particle.oscillation.y += particle.oscillation.frequency;

        // Create wave-like movement
        const waveX = Math.sin(particle.oscillation.x) * particle.oscillation.amplitude;
        const waveY = Math.cos(particle.oscillation.y) * particle.oscillation.amplitude;

        // Update position with wave movement
        particle.x = particle.originalX + waveX + Math.sin(Date.now() * 0.001 + particle.originalX) * 10;
        particle.y = particle.originalY + waveY + Math.cos(Date.now() * 0.001 + particle.originalY) * 10;

        // Boundary checks with wrapping
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Draw particle with light color
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections to nearby particles
        particles.forEach(otherParticle => {
          if (particle === otherParticle) return;

          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) { // Connection distance
            const connectionAlpha = 0.1 * (1 - distance / 100); // Reduced opacity for subtlety
            ctx.beginPath();
            ctx.strokeStyle = `rgba(200, 200, 200, ${connectionAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(render);
    };

    // Start animation
    render();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-50"
    />
  );
};

export default AnimatedBackground;