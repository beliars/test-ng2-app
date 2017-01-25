import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { RestangularModule, RestangularHttp, Restangular } from 'ng2-restangular';

import { routes } from './app.routes';

import { AppComponent } from './components/app.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { RestService } from './services/rest.service';

export function configFunc (RestangularProvider, http) {
  RestangularProvider.setBaseUrl('https://jsonplaceholder.typicode.com/');
}

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    RestangularModule.forRoot([Http], configFunc)
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
