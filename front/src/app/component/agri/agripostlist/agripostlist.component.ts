import { Component, OnInit } from '@angular/core';
 import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-agripostlist',
  templateUrl: './agripostlist.component.html',
  styleUrls: ['./agripostlist.component.css']
})
export class AgripostlistComponent implements OnInit {
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


  

}
