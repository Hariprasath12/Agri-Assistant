import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-agriprofile',
  templateUrl: './agriprofile.component.html',
  styleUrls: ['./agriprofile.component.css']
})
export class AgriprofileComponent implements OnInit {
user:any;
edit:Boolean=false;

  constructor(private authService:AuthService,
  	private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  	this.authService.getProfileagri().subscribe(profile=>{
       this.user=profile;
       
},
  err=>{
  	console.log("error");
  	return false;
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
