import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public scrollToSection(sectionId: string) {
    const navElement = document.getElementById('nav-links');
    if (!navElement) {
      console.warn('Nav element not found.');
      return;
    }
    const offset = navElement.offsetHeight + navElement.style.top;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollBy(0, -offset); // Adjust the scroll position to account for the header
    }
  }

}
