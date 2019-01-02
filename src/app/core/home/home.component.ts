import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string;
  summary: string;
  email: string;
  tagLine: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.name = this.data.getName();
    this.summary = this.data.getSummary();
    this.email = this.data.getEmail();
    this.tagLine = this.data.getTagLine();
  }

}
