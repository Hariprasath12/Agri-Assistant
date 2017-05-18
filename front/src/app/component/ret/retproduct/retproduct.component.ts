import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import { FilterPipePipe } from '../../../pipes/filter-pipe.pipe';
import{Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-retproduct',
  templateUrl: './retproduct.component.html',
  styleUrls: ['./retproduct.component.css']
})
export class RetproductComponent implements OnInit {
 lat: number ;
  lng: number;
  cartitem=[];
itemde=[];
  zoom:Number=15;
  product:String;
  map:boolean=false;
  list:boolean=true;
  cartview:boolean=false;
  payment:Number=0;
  paymentview:Boolean=false;
  balance:Number;
  pay:boolean=true;
  constructor(private authService:AuthService,private router:Router,private flashMessage:FlashMessagesService) { }

  
  ngOnInit() {
  	this.authService.getlocationret().subscribe(pay=>{
  // console.log(pay[0].loc[0]);
    this.lat=pay[0].loc[0].lat;
    this.lng=pay[0].loc[0].lon;

     
     
    
    
},
  err=>{
    console.log("error");
    return false;
  });

    this.authService.retpayment().subscribe(pay=>{
     console.log(pay);
     this.balance=pay.payment;
    
},
  err=>{
    console.log("error");
    return false;
  });
    this.authService.product().subscribe(pay=>{
  console.log(pay);
    this.product=pay;

     
     
    
    
},
  err=>{
    console.log("error");
    return false;
  });
   
   }

   mapon(){
     if(this.map){
       this.map=false;
     }
     else{this.map=true;}
     
   }

   cart(num){
   // console.log(num);  
this.cartitem.push(num);
console.log(this.cartitem);
   }

   viewcart(){
 this.list=false;
 this.cartview=true;
for (let i in this.cartitem) {
  // console.log(i);
  let b=this.cartitem[i];
  // console.log(b);
  this.authService.prolistid(this.cartitem[i]).subscribe(pay=>{
  let a=pay[0].product;
// console.log(a);
for (let i in a ){
    // console.log(b);
    // console.log(a[i]._id);
  if(a[i]._id==b){
  console.log(a[i]);
this.itemde.push(a[i]);
this.payment=this.payment + a[i].rs;
 console.log(this.itemde);
  }

}   
},
  err=>{
    console.log("error");
    return false;
  });
   // b="";
}
}


   paymentpage(){
      this.cartview=false;
      this.paymentview=true;
console.log(this.balance);
if(this.balance<this.payment){
this.pay=false;
}

   }
final(){
const m={
  des:"out",
  to:"1",
  from:"me",
  rs:this.payment


}
const data={
  price:45,
  from:this.itemde[0]._id,
  date:new Date()
};
// console.log(data);
  this.authService.retproduct(m).subscribe(pay=>{
 this.authService.inittrack(data).subscribe(pay=>{

 
  for (let i in this.cartitem) {
const is={
  id:this.cartitem[0]
}

    this.authService.updatesell(is).subscribe(pay=>{
console.log(pay);

  this.authService.prohis(is).subscribe(pay=>{
console.log(pay);




    })


    })
// console.log(this.cartitem[i]);

  }
  this.flashMessage.show('You order is taken', {
          cssClass: 'alert-success',
          timeout: 5000});this.map=false;
  this.list=true;
  this.cartview=false;
  this.paymentview=false;
  this.cartitem=[];
  


  });
  });
this.authService.product().subscribe(pay=>{
  console.log(pay);
    this.product=pay;

     
     
    
    
},
  err=>{
    console.log("error");
    return false;
  });
}

  }


