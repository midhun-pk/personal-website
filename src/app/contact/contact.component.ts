import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  current: string;
  email: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.current = this.data.getCurrentState();
    this.email = this.data.getEmail();
  }

}
