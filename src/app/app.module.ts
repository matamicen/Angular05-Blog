import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import {appRouting} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    PostsComponent,
   
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
