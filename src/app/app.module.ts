import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './users/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
