import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';

import{Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class userDashboardComponent implements OnInit {
user:Object;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {  
 this.authService.getProfile().subscribe(profile=>{


this.user=profile[0];
// console.log(profile);

  },
  err=>{
  	console.log("error");
  	return false;
  });
}

}
