import { Routes } from '@angular/router';

import { AppComponent } from './components/app.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';

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