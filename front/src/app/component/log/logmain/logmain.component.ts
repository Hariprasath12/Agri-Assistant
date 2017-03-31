import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-logmain',
  templateUrl: './logmain.component.html',
  styleUrls: ['./logmain.component.css']
})
export class LogmainComponent implements OnInit {
loc:any;
payment:Number;
  constructor(private authService:AuthService,
  	private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
    this.authService.logpayment().subscribe(pay=>{
    
     this.payment=pay[0].payment;
     console.log(pay);
},
  err=>{
    console.log("error");
    return false;
  });
  	this.authService.getlocation().subscribe(pay=>{
    
    this.loc=pay[0].center;
    // console.log(pay[0].center);
    
},
  err=>{
    console.log("error");
    return false;
  });
  }

}
