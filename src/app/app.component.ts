import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-menu></app-menu>
      <router-outlet></router-outlet>
    </div>`
})
export class AppComponent {
}
