import { Component, OnInit } from '@angular/core';
import { User, UsersService } from '../users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <div>
      <div *ngIf="loading">Loading user</div>
      <div *ngIf="error">User not found</div>
      <div *ngIf="loaded">{{ user| json }}</div>

      <a routerLink="/users">Back to list</a>
    </div>
  `
})
export class UserComponent implements OnInit {
  public loading = true;
  public error = false;
  public user: User;
  public get loaded(): boolean {
    return !this.loading && !this.error && !!this.user;
  }

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => this.loadUser(+params.get('id')));
  }

  private async loadUser(id: number) {
    try {
      this.loading = true;
      this.error = false;
      this.user = null;
      this.user = await this.usersService.getUserById(id);
    } catch (error) {
      console.log(error);
      this.error = true;
    } finally {
      this.loading = false;
    }
  }

}
