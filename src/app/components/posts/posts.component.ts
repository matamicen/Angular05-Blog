import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../servicios/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

 
  private posts:any = {};


  constructor(private router:Router, private blogservice:BlogService) { }

  ngOnInit() {

    this.blogservice.getPosts()
    .subscribe(data => {
      console.log(data)
      this.posts = data.results;
    },
       error => {
         console.log("fallo el call de la API");
        
         console.log(error)
       });
 
    
    console.log('ngOnInit de Post');


   }

   goToPost(id:number){
    console.log('entra a GotoPost');
    this.router.navigate(['/verpost',id]);

   }
 



}
