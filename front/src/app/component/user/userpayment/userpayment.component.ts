import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-userpayment',
  templateUrl: './userpayment.component.html',
  styleUrls: ['./userpayment.component.css']
})
export class UserpaymentComponent implements OnInit {
payment:Number;
  constructor(private authService:AuthService,
  	private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  	this.authService.userpayment().subscribe(pay=>{
    
     this.payment=pay.payment;




},
  err=>{
  	console.log("error");
  	return false;
  });
  }
  onadd(event){



this.authService.useraddpayment(event.rs).subscribe(rs=>{
  
let a=event.rs;
// console.log(a.rs);
  
      if(rs.ok){
      
      this.flashMessage.show('You money added', {
          cssClass: 'alert-success',
          timeout: 5000});

      this.payment+=a.rs;
    }
    else{
  this.flashMessage.show('someerror', {
          cssClass: 'alert-danger',
          timeout: 5000});
  
    }
  });

}
}
