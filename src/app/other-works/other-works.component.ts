import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-other-works',
  templateUrl: './other-works.component.html',
  styleUrls: ['./other-works.component.css']
})
export class OtherWorksComponent implements OnInit {
  projects = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.projects = this.dataService.getProjects();
  }

}
