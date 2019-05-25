import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../servicios/blog.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private blogservice:BlogService) { }

  ngOnInit() {
  }

}
