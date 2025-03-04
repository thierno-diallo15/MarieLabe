import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: false
})
export class MenuComponent {
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:click', ['$event'])
  onClick(event: MouseEvent) {
    // Close menu when clicking outside
    const navbar = document.querySelector('.navbar');
    const toggleButton = document.querySelector('.navbar-toggler');
    
    if (this.isMenuOpen && navbar && toggleButton) {
      if (!navbar.contains(event.target as Node) || 
          !toggleButton.contains(event.target as Node)) {
        this.closeMenu();
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevent body scroll when menu is open
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }
}
