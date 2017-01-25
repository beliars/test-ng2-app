import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ng2-restangular';
import 'rxjs/Rx';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  private users;
  private subscribers;

  constructor(private restangular: Restangular) { 
    this.users = restangular.all("users");
  }

  ngOnInit() {
    this.subscribers = this.users.getList().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }

  ngOnDestroy() {
    this.subscribers.unsubscribe(); 
  }

}
