import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';



@Injectable()
export class BlogService {

    getUsersURL:string = "http://localhost:8080/social/users";
   
    private users:any[] = [];
    private loggedUser:any = {};
    
    constructor(private http:Http) { 

        console.log("servicio listo para usar!");
        
    }


    getUsers(){

        console.log("llama a getUsers");
        // let body = JSON.stringify(user);
         let header = new Headers({'Content-Type':'application/json'});
      
         return this.http.get(this.getUsersURL, {headers: header})
             .map(res =>{
               console.log(res.json());
               console.log("entro positivo RES")
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


}