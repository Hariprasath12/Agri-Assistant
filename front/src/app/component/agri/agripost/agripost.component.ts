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
       this.post=post[0].post;
     // console.log(this.post);
      
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
      
   this.post.push(addpost);  
      
},
  err=>{
    console.log("error");
    return false;
  });
}
  deletepost(a,id){
  // console.log(a);
  // console.log(id);



this.authService.deletepost(id).subscribe(post=>{
      
  this.post.splice(a,1);

      // console.log(post);
},
  err=>{
    console.log("error");
    return false;
  });



  }
  editpost(id){
    console.log(id);
  }


}
