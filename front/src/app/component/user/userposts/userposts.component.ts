import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-userposts',
  templateUrl: './userposts.component.html',
  styleUrls: ['./userposts.component.css']
})
export class UserpostsComponent implements OnInit {
posts:any;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {


  	this.authService.getAllPosts().subscribe(post=>{
    console.log(post[0].post);
      this.posts=post[0].post;
},
  err=>{
  	console.log("error");
  	return false;
  });
  }

}
