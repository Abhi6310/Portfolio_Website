import React, { useRef, useEffect } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    let   config, animationId;

    // Resize handler: cover full scrollable height
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Configuration: more particles and larger connection distance for richer network
    const vw = window.innerWidth;
    config = vw > 1600 ? { nb: 800, dist: 120 }
           : vw > 1300 ? { nb: 700, dist: 100 }
           : vw > 1100 ? { nb: 600, dist:  90 }
           : vw >  800 ? { nb: 400, dist:  80 }
           : vw >  600 ? { nb: 300, dist:  70 }
           :               { nb: 200, dist:  60 };
    config.array = [];

    const colors = [
      'rgba(81,162,233,',
      'rgba(81,162,233,',
      'rgba(81,162,233,',
      'rgba(81,162,233,',
      'rgba(255,77,90,'
    ];

    // Particle class
    function Particle() {
      this.x      = Math.random() * canvas.width;
      this.y      = Math.random() * canvas.height;
      this.vx     = -0.5 + Math.random();
      this.vy     = -0.5 + Math.random();
      this.radius = 1.5 * Math.random();
      this.color  = colors[Math.floor(Math.random() * colors.length)];
    }
    Particle.prototype.create = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = this.color + '0.8)';
      ctx.fill();
    };
    Particle.prototype.update = function() {
      if (this.y <= 0 || this.y >= canvas.height) this.vy = -this.vy;
      if (this.x <= 0 || this.x >= canvas.width)  this.vx = -this.vx;
      this.x += this.vx;
      this.y += this.vy;
    };
    Particle.prototype.connect = function() {
      for (let j = 0; j < config.nb; j++) {
        const p2 = config.array[j];
        const dx = this.x - p2.x, dy = this.y - p2.y;
        if (Math.abs(dx) < config.dist && Math.abs(dy) < config.dist) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(p2.x, p2.y);
          const dist = Math.hypot(dx, dy);
          const alpha = 1 - dist / config.dist;
          ctx.strokeStyle = `rgba(81,162,233,${alpha})`;
          ctx.stroke();
        }
      }
    };

    // Mouse tracking for first particle
    const onMouseMove = e => {
      if (config.array[0]) {
        config.array[0].x = e.pageX;
        config.array[0].y = e.pageY;
      }
    };
    window.addEventListener('mousemove', onMouseMove);

    // Initialize particles
    for (let i = 0; i < config.nb; i++) {
      config.array[i] = new Particle();
    }
    config.array[0].radius = 1.5;
    config.array[0].color  = 'rgba(81,162,233,1)';

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      config.array.forEach(p => {
        p.create();
        p.connect();
        p.update();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default ParticlesBackground;
