import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servies/auth.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user:object;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {  
 this.authService.getprofile().subscribe(profile=>{
this.user= JSON.parse(profile._body);
console.log(this.user);
  },
  err=>{
  	console.log("error");
  	return false;
  }


}
