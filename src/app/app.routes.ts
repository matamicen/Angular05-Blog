import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {PostsComponent} from './components/posts/posts.component';

const routes: Routes = [
    { path: 'users', component: UserComponent },
    { path: 'posts', component: PostsComponent },
    { path: '**', pathMatch:'full', redirectTo: 'users' }
];

export const appRouting = RouterModule.forRoot(routes);