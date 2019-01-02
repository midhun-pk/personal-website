import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  skills: string[];
  image: string;
  stories: string[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.skills = this.data.getSkills();
    this.image = this.data.getImage();
    this.stories = this.data.getStory();
  }

}
