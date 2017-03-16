import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-agriprofile',
  templateUrl: './agriprofile.component.html',
  styleUrls: ['./agriprofile.component.css']
})
export class AgriprofileComponent implements OnInit {
user:Object;

  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
  	this.authService.getProfileagri().subscribe(profile=>{
       this.user=profile.user;
       console.log(this.user);
},
  err=>{
  	console.log("error");
  	return false;
  });
  }



  

}
