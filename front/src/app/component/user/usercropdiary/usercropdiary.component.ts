import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-usercropdiary',
  templateUrl: './usercropdiary.component.html',
  styleUrls: ['./usercropdiary.component.css']
})
export class UsercropdiaryComponent implements OnInit {
posts:any;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
this.authService.cropdiary().subscribe(post=>{
    console.log(post);
     
},
  err=>{
  	console.log("error");
  	return false;
  });




  }

}
