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
export class agriRegisterComponent implements OnInit {
name:String;
  	password:String;
  	email:String;
  	address:String;
  	clg:String;
  	qua:String;
  	phone:Number;
  constructor(private authService:AuthService,
  	private router:Router,
     private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }


  onRegisterSubmit(){
  	const user={
  		name:this.name,
  		password:this.password,
  		email:this.email,
  		phone:this.phone,
  		clg:this.clg,
  		qua:this.qua,
  		address:this.address
  	}


  this.authService.registeragri(user).subscribe(data => {

 
      if(data.success){
  		  this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
  		this.router.navigate(['agri/login']);
  	}
  	else{
  		this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
	this.router.navigate(['agri/register']);
  	}

  });

  }


}
