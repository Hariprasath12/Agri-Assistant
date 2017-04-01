import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-retprofile',
  templateUrl: './retprofile.component.html',
  styleUrls: ['./retprofile.component.css']
})
export class RetprofileComponent implements OnInit {
user:any;
edit:any;
  constructor(private authService:AuthService,
  	private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  	this.authService.getProfileret().subscribe(profile=>{
       this.user=profile;
       console.log(this.user);
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
