import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    {
        path: 'posts', 
        component: PostsComponent
    },
    {
        path: 'users', 
        component: UsersComponent
    }
    ];