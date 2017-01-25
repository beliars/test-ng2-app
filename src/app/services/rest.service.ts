import { Injectable } from '@angular/core';

import { Restangular } from 'ng2-restangular';


@Injectable()
export class RestService {

  constructor(private restangular: Restangular) {}

  getPostsList() {
    let posts = this.restangular.all('posts').getList();
    return posts;
  }

  getUsersList() {
    let users = this.restangular.all('users').getList();
    return users;
  }
}
