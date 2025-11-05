// Typewriter effect untuk home page - RUNNING 1X SAJA
class TypeWriter {
  constructor(elementId, text, speed = 30) {
    this.element = document.getElementById(elementId);
    this.text = text;
    this.speed = speed;
    this.index = 0;
    this.hasCompleted = false;
  }

  start() {
    if (this.element && !this.hasCompleted) {
      this.type();
    }
  }

  type() {
    if (this.index < this.text.length) {
      const current = this.text.substring(0, this.index + 1);
      this.element.textContent = current;
      this.index++;
      setTimeout(() => this.type(), this.speed);
    } else {
      this.hasCompleted = true;
      // Hentikan blink animation setelah selesai
      setTimeout(() => {
        this.element.style.animation = 'none';
        this.element.style.borderRight = 'none';
      }, 1000);
    }
  }
}

// Initialize home page
document.addEventListener('DOMContentLoaded', () => {
  const typewriterText = `Selamat datang di hub digital resmi Kelas 1 TI B Teknik Informatika! 
Mari kita jadikan platform ini pusat networking dan resource utama 
untuk mengasah kemampuan teknis, menciptakan solusi problem-solving yang cerdas, 
dan mendorong inovasi.`;

  const typewriter = new TypeWriter('typewriterText', typewriterText);
  setTimeout(() => typewriter.start(), 1000);
});