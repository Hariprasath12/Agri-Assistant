import { Component, OnInit } from '@angular/core';
 import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
// import{post} from '../../../models/post';

@Component({
  selector: 'app-agripost',
  templateUrl: './agripost.component.html',
  styleUrls: ['./agripost.component.css']
})
export class AgripostComponent implements OnInit {
title:String;
content:String;
tag:any;
post:any;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
  	this.authService.post().subscribe(post=>{
       this.post=post;
     console.log(post);
      
},
  err=>{
  	console.log("error");
  	return false;
  });

}

onpostSubmit(){

const addpost={
  title:this.title,
  content:this.content,
  tag:this.tag.split(",")
 }

this.authService.addpost(addpost).subscribe(post=>{
      
     console.log(post);
      
},
  err=>{
    console.log("error");
    return false;
  });




  }


}
