import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <div>
      <a [routerLink]="['/']">homepage</a>
      <a [routerLink]="['/users']">users</a>
    </div>
  `
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
