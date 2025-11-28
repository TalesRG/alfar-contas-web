import {Component, signal} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    NgIf,
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
