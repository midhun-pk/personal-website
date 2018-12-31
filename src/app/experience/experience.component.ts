import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  activeTabIndex = 0;

  jobs = [{
    company: 'Infosys',
    role: 'Engineer',
    duration: 'Nov 2015 - Dec 2018',
    descriptions: [
      'Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'Work with a variety of different languages, platforms, frameworks, and content management systems \
        such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify',
      'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
    ]
  }, {
    company: 'TCS',
    role: 'Intern',
    duration: 'July 2014 - Oct 2014',
    descriptions: [
      'Work with a variety of different languages, platforms, frameworks, and content management systems \
        such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify',
      'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
    ]
  }];

  constructor() { }

  ngOnInit() {
  }

  setActiveTab(index: number): void {
    this.activeTabIndex = index;
  }

  isActive(index: number): boolean {
    return this.activeTabIndex === index;
  }

  getHighlightTransform(): string {
    if (window.innerWidth < 600) {
      return 'translateX(' + (this.activeTabIndex > 0 ? this.activeTabIndex * 120 : 0) + 'px)';
    }
    return 'translateY(' + (this.activeTabIndex > 0 ? this.activeTabIndex * 42 : 0) + 'px)';
  }

}
