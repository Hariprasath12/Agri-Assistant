import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-retpayment',
  templateUrl: './retpayment.component.html',
  styleUrls: ['./retpayment.component.css']
})
export class RetpaymentComponent implements OnInit {
payment:Number;
history:any;
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
    this.authService.retpaymenthis().subscribe(his=>{
    
     // console.log(his[0].pay_his);
this.history=his[0].pay_his;

},
  err=>{
    console.log("error");
    return false;
  });



  }

  onadd(event){

// console.log(event.rs);

this.authService.retaddpayment(event.rs).subscribe(rs=>{
  
let a=event.rs;
// console.log(a.rs);
this.authService.retpaymenthis().subscribe(his=>{
    
     // console.log(his[0].pay_his);
this.history=his[0].pay_his;

this.authService.retpayment().subscribe(pay=>{
     console.log(pay);
     this.payment=pay.payment;
    
},
  err=>{
    console.log("error");
    return false;
  });


},
  err=>{
    console.log("error");
    return false;
  });


  
      if(rs.ok){
      
      this.flashMessage.show('You money added', {
          cssClass: 'alert-success',
          timeout: 1000});

      this.payment+=a.rs;
    }
    else{
  this.flashMessage.show('someerror', {
          cssClass: 'alert-danger',
          timeout: 1000});
  
    }
  });

}

}
