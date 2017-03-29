import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
post:any;
crops:any;
edit:Boolean=false;

  constructor(private authService:AuthService,
    private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {


this.authService.getProfile().subscribe(post=>{
    
     this.post=post;
     // console.log(this.post);
},
  err=>{
  	console.log("error");
  	return false;
  });

this.authService.getcrops().subscribe(crops=>{
    
     this.crops=crops.crops;
     // console.log(this.crops);
},
  err=>{
    console.log("error");
    return false;
  });
  }
   

    onadd(event){
// console.log(event);
this.authService.addcrops(event).subscribe(rs=>{
 if(rs.ok){

      
      this.authService.getcrops().subscribe(crops=>{
    
     this.crops=crops.crops;
     // console.log(this.crops);
},
  err=>{
    console.log("error");
    return false;
  });

this.flashMessage.show('Your crops added', {
          cssClass: 'alert-success',
          timeout: 1000});
}
    else{
  this.flashMessage.show('someerror', {
          cssClass: 'alert-danger',
          timeout: 1000});
  
    }
  });



}

editprofile(){
if(this.edit){
 this.edit=false;
}
else{
  this.edit=true;
}


  
}



}
