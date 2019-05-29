import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import {appRouting} from './app.routes';
import {HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';


// Service
import {BlogService} from './servicios/blog.service';
import { PostComponent } from './components/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
   
  ],
  imports: [
    BrowserModule,
    appRouting,
    HttpModule,
    FormsModule

  ],
  providers: [
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
