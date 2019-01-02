import { Component } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string;
  linkedinURL: string;
  githubURL: string;
  animationCompleted = false;

  constructor(private data: DataService) {
    setTimeout(() => {
      this.animationCompleted = true;
    }, 3000);
    this.email = this.data.getEmail();
    this.linkedinURL = this.data.getLinkedinURL();
    this.githubURL = this.data.getGithubURL();
  }


}
