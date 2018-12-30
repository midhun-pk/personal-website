import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('hamburger') hamburger: ElementRef;
  sidebarOpen = false;
  navList = ['About', 'Experience', 'Work', 'Contact'];

  constructor(private scrollToService: ScrollToService) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    if (this.sidebarOpen) {
      document.body.classList.add('blur');
    } else {
      document.body.classList.remove('blur');
    }
  }

  @HostListener('window:resize') checkResize() {
    if (window.innerWidth > 768 && this.sidebarOpen) {
      this.toggleSidebar();
    }
  }

  @HostListener('window:keydown', ['$event']) checkKeydown(event: KeyboardEvent) {
    if (this.sidebarOpen && event.keyCode === 27) {
      this.toggleSidebar();
    }
  }

  onMenuClick(event: Event) {
    const target = <HTMLElement>event.target;
    const isLink = target.hasAttribute('sidebarlink');
    const isLogo = target.hasAttribute('logo');
    const isContainer = target.classList && target.classList.value.includes('menu-container');
    if ((isLink || isContainer || isLogo) && this.sidebarOpen) {
      this.toggleSidebar();
    }
  }

  scrollTo(id) {
    const config: ScrollToConfigOptions = {
      target: id
    };
    this.scrollToService.scrollTo(config);
  }
}
