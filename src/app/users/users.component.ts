import { Component, OnInit } from '@angular/core';
import { User, UsersService } from './users.service';

@Component({
  selector: 'app-users',
  template: `
    <div>
      <h1>Users</h1>
      <div>
        <div *ngIf="!loaded">Loading...</div>
        <div *ngFor="let user of users">{{ user.fullName }} <a [routerLink]="['/users', user.id]">show</a></div>
      </div>
      <hr />
      <router-outlet></router-outlet>
    </div>
  `
})
export class UsersComponent implements OnInit {
  public loaded = false;
  public users: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().then(users => {
      this.users = users;
      this.loaded = true;
    });
  }

}
