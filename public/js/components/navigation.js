// ✅ CIRCLE MENU DENGAN EFEK RIPPLE
class CircleMenu {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.menuButtons = this.container?.querySelector('.menu-buttons');
    this.rippleContainer = this.container?.parentElement.querySelector('.ripple-effect');
    this.isOpen = false;
    
    if (this.container) {
      this.init();
    }
  }

  init() {
    this.container.addEventListener('click', this.toggleMenu.bind(this));
    this.setupButtonAnimations();
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    
    if (this.isOpen) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }

  openMenu() {
    this.container.classList.add('active');
    this.menuButtons.classList.add('menu-open');
    
    // Buat efek ripple
    this.createRippleEffect();
    
    // Animate buttons dengan urutan yang diperbarui
    const buttons = this.menuButtons.children;
    const animations = [
      'slideToLeft',    // Anggota
      'slideToRight',   // Galeri  
      'slideToTop',     // ✅ JADWAL BARU
      'slideToBottom'   // Website Kampus
    ];

    Array.from(buttons).forEach((button, index) => {
      button.style.animation = `${animations[index]} 0.6s ease forwards`;
      button.style.animationDelay = `${(index + 1) * 0.1}s`;
    });
  }

  closeMenu() {
    const buttons = this.menuButtons.children;
    
    Array.from(buttons).forEach(button => {
      button.style.animation = 'fadeOut 0.4s ease forwards';
    });

    setTimeout(() => {
      this.menuButtons.classList.remove('menu-open');
      this.container.classList.remove('active');
    }, 400);
  }

  createRippleEffect() {
    if (!this.rippleContainer) return;

    // Hapus ripple sebelumnya
    this.rippleContainer.innerHTML = '';

    // Buat multiple ripple circles
    for (let i = 0; i < 3; i++) {
      const ripple = document.createElement('div');
      ripple.classList.add('ripple-circle');
      ripple.style.animationDelay = `${i * 0.3}s`;
      this.rippleContainer.appendChild(ripple);
    }
  }

  setupButtonAnimations() {
    // Pastikan animasi CSS sudah terdefinisi
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeOut {
        to { opacity: 0; transform: scale(0.5); }
      }
    `;
    document.head.appendChild(style);
  }
}