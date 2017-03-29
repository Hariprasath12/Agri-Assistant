import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-usermain',
  templateUrl: './usermain.component.html',
  styleUrls: ['./usermain.component.css']
})
export class UsermainComponent implements OnInit {
crops:any;
payment:any;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
  	this.authService.getcrops().subscribe(crops=>{
    
     this.crops=crops.crops;
     // console.log(this.crops);
},
  err=>{
    console.log("error");
    return false;
  });

    this.authService.userpayment().subscribe(pay=>{
    
     this.payment=pay.payment;
},
  err=>{
    console.log("error");
    return false;
  });
  }


}
