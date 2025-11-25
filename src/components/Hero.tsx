import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseSpeed: number;

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.baseSpeed = Math.random() * 0.3 + 0.1;
    const angle = Math.random() * Math.PI * 2;
    this.vx = Math.cos(angle) * this.baseSpeed;
    this.vy = Math.sin(angle) * this.baseSpeed;
    this.size = Math.random() * 1.5 + 0.5;
  }

  update(volatility: number, w: number, h: number) {
    // Speed multiplier based on volatility: 1x to 4x
    const speed = 1 + (volatility * 3);
    
    this.x += this.vx * speed;
    this.y += this.vy * speed;

    // Wrap around
    if (this.x < 0) this.x = w;
    if (this.x > w) this.x = 0;
    if (this.y < 0) this.y = h;
    if (this.y > h) this.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D, volatility: number) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    
    // Color shift: Blue (Low Vol) -> Lime (High Vol)
    if (volatility > 0.6) {
       ctx.fillStyle = `rgba(204, 255, 0, ${0.5 + volatility * 0.5})`;
    } else {
       ctx.fillStyle = `rgba(46, 92, 255, ${0.5 + volatility * 0.5})`;
    }
    
    ctx.fill();
  }
}

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [volatility, setVolatility] = useState(0.3); // Scale 0 to 1
  const volatilityRef = useRef(volatility);

  // Keep ref in sync with state for the animation loop
  useEffect(() => {
    volatilityRef.current = volatility;
  }, [volatility]);

  // Simulate Market Volatility
  useEffect(() => {
    const interval = setInterval(() => {
      setVolatility(prev => {
        // Random walk
        const delta = (Math.random() - 0.5) * 0.4;
        let next = prev + delta;
        // Clamp
        return Math.max(0.1, Math.min(0.9, next));
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Canvas Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const particles: Particle[] = [];

    const initParticles = () => {
      particles.length = 0;
      // Responsive particle count
      const count = Math.min(100, Math.floor((width * height) / 10000));
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const currentVol = volatilityRef.current;

      // Update and Draw Particles
      particles.forEach(p => {
        p.update(currentVol, width, height);
        p.draw(ctx, currentVol);
      });

      // Draw Connections
      const maxDist = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.4; // Base opacity
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Line Color Logic
            if (currentVol > 0.6) {
                ctx.strokeStyle = `rgba(204, 255, 0, ${opacity})`;
            } else {
                ctx.strokeStyle = `rgba(46, 92, 255, ${opacity})`;
            }
            
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-dynasty-black">
      {/* Canvas Layer */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-70"
      />
      
      {/* Gradients for depth/vignette */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-dynasty-black via-transparent to-dynasty-black pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 border border-white/10 rounded-full bg-black/40 backdrop-blur-md">
            <span className="w-2 h-2 bg-dynasty-lime rounded-full animate-pulse"></span>
            <span className="text-gray-300 text-xs font-mono uppercase tracking-widest">
                Architecting The Decentralized Era
            </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans text-white mb-8 tracking-tighter leading-none text-glow select-none">
          DY<span className="logo-n">N</span>ASTY
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
          We are not just capital allocators. We are <span className="text-white font-medium">active builders</span>. 
          Deploying advisory, GTM, and engineering resources alongside founders to forge the future.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button onClick={() => document.getElementById('oracle')?.scrollIntoView({ behavior: 'smooth' })} className="group relative px-8 py-4 bg-white text-black font-display font-bold tracking-widest hover:bg-dynasty-lime transition-colors duration-300">
            CONSULT ORACLE
            <div className="absolute inset-0 border border-white translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
          </button>
          
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center gap-2 text-white hover:text-dynasty-lime transition-colors duration-300 font-light tracking-wide uppercase text-sm">
            Pitch Your Vision <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 z-20">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;