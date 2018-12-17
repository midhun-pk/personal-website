import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midhun';
  animationCompleted = false;

  constructor() {
    setTimeout(() => {
      this.animationCompleted = true;
    }, 3000);
  }
}
