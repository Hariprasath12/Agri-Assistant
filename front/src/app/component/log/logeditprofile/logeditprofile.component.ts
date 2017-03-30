import { Component, OnInit,Input } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-logeditprofile',
  templateUrl: './logeditprofile.component.html',
  styleUrls: ['./logeditprofile.component.css']
})
export class LogeditprofileComponent implements OnInit {
@Input() user;
posts:any;
  constructor(private authService:AuthService,
    private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  	this.posts={
      name:this.user[0].name,
      phone:this.user[0].phone,
      cmail:this.user[0].cmail,
      cname:this.user[0].companyname
}
  }
  save(model, isValid: boolean) {
       const data={
name:model.name,
companyname:model.cname,
cmail:model.cemail,
phone:model.phone,

}

// console.log(data);
 this.authService.updatelogprofile(data).subscribe(data=>{


   
      if(data.ok){
      
      this.flashMessage.show('Profile updated', {
          cssClass: 'alert-success',
          timeout: 1000});
      this.router.navigate(['log/dashboard']);
      
    }
    else{
  this.flashMessage.show('error', {
          cssClass: 'alert-danger',
          timeout: 1000});
  
    }
  }); 
}

}
