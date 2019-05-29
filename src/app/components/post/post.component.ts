import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BlogService} from '../../servicios/blog.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private postComments:any = {};
  
  private newComment:String = " ";
   

  constructor(private activatedRoute:ActivatedRoute, private blogservice:BlogService) { 

    this.activatedRoute.params.subscribe(params => {
      console.log('parametro:'+ params['id']);

      this.blogservice.getPostComments(params['id'])
        .subscribe(data => {
          console.log(data)
          this.postComments = data;
        },
          error => {
            console.log("fallo el call de la API");
            
            console.log(error)
          });
     
      
    })




  }

  ngOnInit() {
  }

  guardar(forma:NgForm) {
    console.log("guardo los cambios");
    console.log("NgForm forma: ", forma);
    console.log("forma value: ", forma.value);
    console.log("usuario logueado que va a hacer el comentario"+this.blogservice.getUserLogged().name);
     

}

}
