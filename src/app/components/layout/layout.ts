import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    NgIf,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  sidebarOpen = signal(true);

  toggleSidebar() {
    this.sidebarOpen.set(true)
  }

  closeSidebar() {
    this.sidebarOpen.set(false)
  }
}
