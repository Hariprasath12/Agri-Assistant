import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';

import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class userRegisterComponent implements OnInit {
name:String;
password:String;
irr:String;
phone:Number;
soil:String;
farm:String;
address:String;
acres:Number;




  constructor(private authService:AuthService,
  	private router:Router,
     private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
  	const user={
  		name:this.name,
  		phone:this.phone,
  		password:this.password,
      address:this.address,
      irr:this.irr,
      farm:this.farm,
      soiltype:this.soil,
      acres:this.acres

  	}
  
   // const user=JSON.stringify(x);
  //register user
  // console.log(user);

  this.authService.registerUser(user).subscribe(data => {

 
      if(data.success){
  		  this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
  		this.router.navigate(['/login']);
  	}
  	else{
  		this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
	this.router.navigate(['/register']);
  	}

  });
  }

}
