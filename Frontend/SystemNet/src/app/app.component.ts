import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SystemNet';

  constructor(private router: Router) {}

  registerActive(): string {
    if (this.router.url.includes('register')) return 'active';
    else return '';
  }

  queryActive(): string {
    if (this.router.url.includes('query')) return 'active';
    else return '';
  }
}
