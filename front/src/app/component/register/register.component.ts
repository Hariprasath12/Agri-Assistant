import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servies/auth.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name:String;
email:String;
password:String;
irr:String;
phone:Number;
soil:String;


  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
  	const x={
  		name:this.name,
  		phone:this.phone,
  		password:this.password

  	}
  
   const user=JSON.stringify(x);
  //register user
  console.log(user);

  this.authService.registerUser(user).subscribe(data => {
  	console.log(data);
      if(data.success){
  		console.log("success");
  		this.router.navigate(['/login']);
  	}
  	else{
  		console.log("failed");
	this.router.navigate(['/register']);
  	}

  });
  }


}
