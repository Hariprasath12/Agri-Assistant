import { Component, OnInit , Output, EventEmitter } from '@angular/core';
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


  }

    onadd(event){
// console.log(event);
this.authService.addcrops(event).subscribe(rs=>{
  
// console.log(rs);
// console.log(a.rs);
  
      if(rs.ok){
      
      this.flashMessage.show('Your crops added', {
          cssClass: 'alert-success',
          timeout: 5000});

      
    }
    else{
  this.flashMessage.show('someerror', {
          cssClass: 'alert-danger',
          timeout: 5000});
  
    }
  });



}

}
