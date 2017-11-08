import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id',
        component: UserComponent
      }
    ]

  }
];
