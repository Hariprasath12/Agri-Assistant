import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';

import{Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class retRegisterComponent implements OnInit {

 name:String;
password:String;
email:String;
phone:Number;
ctype:String;
cname:String;
address:String;

  constructor(private authService:AuthService,
  	private router:Router,
     private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
  	const user={
  		email:this.email,
  name:this.name,
 password:this.password,
  companyname:this.cname,
  address:this.address,
  phone:this.phone,
companytype:this.ctype

  	}
  
   // const user=JSON.stringify(x);
  //register user
  // console.log(user);

  this.authService.registerret(user).subscribe(data => {

 
      if(data.success){
  		  this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
  		this.router.navigate(['ret/login']);
  	}
  	else{
  		this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
	this.router.navigate(['ret/register']);
  	}

  });
  }

}
