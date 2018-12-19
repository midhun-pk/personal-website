import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  skills = ['Python',
    'Javascript',
    'Typescript',
    'Mongodb',
    'Elasticsearch',
    'Angular',
    'React',
    'HTML & CSS',
    'D3.js',
    'Apache Spark',
    'Node.js',
    'Flask',
    'PyTorch',
    'Tensorflow'
  ];

  constructor() { }

  ngOnInit() {
  }

}
