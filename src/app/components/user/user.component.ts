import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../servicios/blog.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users:any = [];
 

  constructor(private blogservice:BlogService) { }

  ngOnInit() {

   this.blogservice.getUsers()
   .subscribe(data => {
     console.log(data)
     this.users = data.results;
   },
      error => {
        console.log("fallo el call de la API");
       
        console.log(error)
      });

   console.log(this.users);
   console.log('ngOnInit');
  }

}
