import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  activeTabIndex = 0;
  jobs = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.jobs = this.data.getJobs();
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
