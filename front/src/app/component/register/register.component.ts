import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
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
str:Any;


  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
  	const user={
  		name:this.name,
  		phone:this.phone,
  		password:this.password

  	}
  
   // const user=JSON.stringify(x);
  //register user
  // console.log(user);

  this.authService.registerUser(user).subscribe(data => {
  	
    let obj: Any = JSON.parse(data._body);
    console.log(obj.success);
    //console.log(obj.myNumber); 
     
      //console.log(data._body);
 
      if(obj.success){
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
