import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-retmain',
  templateUrl: './retmain.component.html',
  styleUrls: ['./retmain.component.css']
})
export class RetmainComponent implements OnInit {
payment:Number;
  constructor(private authService:AuthService,
    private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  	this.authService.retpayment().subscribe(pay=>{
     console.log(pay);
     this.payment=pay.payment;
    
},
  err=>{
  	console.log("error");
  	return false;
  });
  }

}
