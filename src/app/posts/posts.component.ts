import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ng2-restangular';
import 'rxjs/Rx';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private posts;
  private subscribers;

  constructor(public restangular: Restangular) {
    this.posts = restangular.all("posts");
  }

  ngOnInit() {
    this.subscribers = this.posts.getList().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  ngOnDestroy() {
    this.subscribers.unsubscribe(); 
  }

}
