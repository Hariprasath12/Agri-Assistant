import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';

import{Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class logDashboardComponent implements OnInit {
user:Object;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {  
 this.authService.getProfilelog().subscribe(profile=>{


this.user=profile[0];



// console.log(str.user);
  },
  err=>{
  	console.log("error");
  	return false;
  });
}

}
