import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  projects = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.projects = this.data.getFeaturedProjects();
  }

}
