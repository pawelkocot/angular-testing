import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/delay';

export interface User {
  id: number;
  email: string;
  fullName: string;
}

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  public async getUsers(): Promise<User[]> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users').toPromise().then((users: any[]) => {
      return users.map(user => this.toUser(user));
    });
  }

  public async getUserById(id: number): Promise<User> {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`).toPromise().then((user: any) => this.toUser(user));
  }

  private toUser(data: any): User {
    return {
      id: data.id,
      email: data.email.toLowerCase(),
      fullName: `${data.name} ${data.username}`
    };
  }
}
