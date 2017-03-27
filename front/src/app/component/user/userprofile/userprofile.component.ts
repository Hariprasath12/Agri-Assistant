import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
post:any;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {


this.authService.getProfile().subscribe(post=>{
    
     this.post=post.user;

console.log(this.post);



},
  err=>{
  	console.log("error");
  	return false;
  });


  }

}
