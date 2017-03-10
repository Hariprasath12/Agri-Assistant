import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';

import{Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class logLoginComponent implements OnInit {
email:String;
password:String;
  constructor(private authService:AuthService,
  	private router:Router,
    private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }
  onLoginSubmit(){
	const user={
		email:this.email,
		password:this.password
	}
	this.authService.authenticatelog(user).subscribe(data=>{

// let obj = JSON.parse(data._body);
   
      if(data.success){
  		this.authService.storeUserData(data.token,data.user);
      this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success',
          timeout: 5000});
  		this.router.navigate(['/dashboard']);
  	}
  	else{
  this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000});
	this.router.navigate(['/login']);
  	}
	});
}

}
