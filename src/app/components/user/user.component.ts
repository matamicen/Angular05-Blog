import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../servicios/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


 private users:any = {};
 private show:boolean = false;
 

  constructor(private router:Router, private blogservice:BlogService) { }

  ngOnInit() {

   this.blogservice.getUsers()
   .subscribe(data => {
     console.log(data)
     this.users = data.results;
     this.show = true;
   },
      error => {
        console.log("fallo el call de la API");
       
        console.log(error)
      });

   
   console.log('ngOnInit');
  }

  userSelected(id:number,name:string,avatar:string){
     let loggedUser = { "id":id, "name" :name, "avatar":avatar };
     this.blogservice.setUserLogged(loggedUser);
     console.log(loggedUser);
     this.router.navigate(['/posts']);
    
  }



}
