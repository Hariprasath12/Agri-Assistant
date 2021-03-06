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
export class logRegisterComponent implements OnInit {

 name:String;
password:String;

phone:Number;
email:String;
cname:String;
cmail:String;

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
      email:this.email,
      cname:this.cname,
      cmail:this.cmail
    }


  this.authService.registerlog(user).subscribe(data => {

 
      if(data.success){
  		  this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
  		this.router.navigate(['log/login']);
  	}
  	else{
  		this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
	this.router.navigate(['log/register']);
  	}

  });



  }


}
