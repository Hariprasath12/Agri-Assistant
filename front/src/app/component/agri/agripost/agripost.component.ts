import { Component, OnInit } from '@angular/core';
 import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

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

onUserCreated(event){



this.authService.addpost(event.post).subscribe(post=>{
      
    this.post.push(event.post);
      
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
