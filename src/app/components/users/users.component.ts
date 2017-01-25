import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ng2-restangular';
import 'rxjs/Rx';

import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  private users;
  private subscribers;

  constructor(private restangular: Restangular, private restService: RestService) {
    this.users = restangular.all("users");
  }

  ngOnInit() {
    this.subscribers = this.restService.getUsersList().subscribe(users => {
      this.users = users;
    });
  }

  ngOnDestroy() {
    this.subscribers.unsubscribe(); 
  }

}
