// Particle Stars Background Effect
class ParticleStars {
    constructor() {
        this.canvas = document.getElementById('particles-js');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.numberOfParticles = 150;
        
        this.init();
    }

    init() {
        this.resizeCanvas();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.createParticles();
        });
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        
        for (let i = 0; i < this.numberOfParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                speed: Math.random() * 0.5 + 0.2,
                opacity: Math.random() * 0.5 + 0.3,
                twinkleSpeed: Math.random() * 0.02 + 0.01,
                angle: 0
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Update particle properties for twinkling effect
            particle.angle += particle.twinkleSpeed;
            particle.opacity = 0.3 + Math.sin(particle.angle) * 0.3;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
            this.ctx.fill();
            
            // Add subtle movement
            particle.y += particle.speed;
            if (particle.y > this.canvas.height) {
                particle.y = 0;
                particle.x = Math.random() * this.canvas.width;
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particles when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ParticleStars();
});