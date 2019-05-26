import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';



@Injectable()
export class BlogService {

    getUsersURL:string = "http://localhost:8080/social/users";
    getPostsURL:string = "http://localhost:8080/social/posts";
    getPostCommentsURL:string = "http://localhost:8080/social/comment";
   

    private users:any = {};
    private posts:any = {};
    private postComments:any = {};
    private loggedUser:any = {};
    
    constructor(private http:Http) { 

        console.log("servicio listo para usar!");
        
    }


    getUsers(){

        console.log("llama a getUsers");
      
         let header = new Headers({'Content-Type':'application/json'});
      
         return this.http.get(this.getUsersURL, {headers: header})
             .map(res =>{
               console.log(res.json());
               console.log("entro positivo REST getUsers")
               this.users = res.json().results;
               return res.json();
             }, err => console.log("error: "+err.json()));

    }

    setUserLogged(user:any) {
      this.loggedUser = user;

    }

    getUserLogged(){
        return this.loggedUser;
    }

    getPosts(){

      console.log("llama a getPosts");
 
       let header = new Headers({'Content-Type':'application/json'});
      
    
       return this.http.get(this.getPostsURL, {headers: header})
           .map(res =>{
             console.log(res.json());
             console.log("entro positivo REST getPosts")
             this.posts = res.json().results;
             return res.json();
           }, err => console.log("error: "+err.json()));

  }


  getPostComments(idpost:number){

    console.log("llama a getPostComments API");
  
     let header = new Headers({'Content-Type':'application/json'});
   
  
     return this.http.get(this.getPostCommentsURL+"/"+idpost, {headers: header})
         .map(res =>{
           console.log(res.json());
           console.log("entro positivo REST getPostComments")
           this.postComments = res.json();
           return res.json();
         }, err => console.log("error: "+err.json()));

}


}