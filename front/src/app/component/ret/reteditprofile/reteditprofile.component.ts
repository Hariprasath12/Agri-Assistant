import { Component, OnInit,Input } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-reteditprofile',
  templateUrl: './reteditprofile.component.html',
  styleUrls: ['./reteditprofile.component.css']
})
export class ReteditprofileComponent implements OnInit {
@Input() user;
posts:any;
  constructor(private authService:AuthService,
    private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  	this.posts={
      name:this.user[0].name,
      ctype:this.user[0].companytype,
      address:this.user[0].address,
      cname:this.user[0].companyname,
      phone:this.user[0].phone
     
    }
  }



  save(model, isValid: boolean) {
       const data={
name:model.name,
companytype:model.ctype,
phone:model.phone,
address:model.add,
companyname:model.cname

}
 this.authService.updateretprofile(data).subscribe(data=>{


   
      if(data.ok){
      
      this.flashMessage.show('Profile updated', {
          cssClass: 'alert-success',
          timeout: 1000});
      this.router.navigate(['ret/dashboard']);
      
    }
    else{
  this.flashMessage.show('error', {
          cssClass: 'alert-danger',
          timeout: 1000});
  
    }
  }); 
}

}
