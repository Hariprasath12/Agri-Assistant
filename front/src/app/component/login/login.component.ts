import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
phone:Number;
password:String;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
  }
onLoginSubmit(){
	const user={
		username:this.phone,
		password:this.password
	}
	this.authService.authenticateUser(user).subscribe(data=>{
console.log(data);
let obj = JSON.parse(data._body);
   
      if(obj.success){
  		this.authService.storeUserData(obj.token,obj.user);
  		this.router.navigate(['/dashboard']);
  	}
  	else{
  		console.log("failed");
	this.router.navigate(['/login']);
  	}
	});
}

}
