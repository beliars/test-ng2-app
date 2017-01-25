import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ng2-restangular';
import 'rxjs/Rx';

import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private posts;
  private subscribers;

  constructor(private restangular: Restangular, private restService: RestService) {
    this.posts = restangular.all("posts");
  }

  ngOnInit() {
    this.subscribers = this.restService.getPostsList().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.subscribers.unsubscribe(); 
  }

}
