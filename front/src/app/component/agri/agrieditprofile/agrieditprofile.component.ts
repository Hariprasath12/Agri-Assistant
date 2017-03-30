import { Component, OnInit,Input } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-agrieditprofile',
  templateUrl: './agrieditprofile.component.html',
  styleUrls: ['./agrieditprofile.component.css']
})
export class AgrieditprofileComponent implements OnInit {
@Input() user;
posts:any;
  constructor(private authService:AuthService,
  	private router:Router,private flashMessage:FlashMessagesService) { 
  	}

  ngOnInit() {
  	this.posts={
      name:this.user[0].name,
      clg:this.user[0].clg,
      address:this.user[0].address,
      email:this.user[0].email,
      qua:this.user[0].qualification
     
    }
}

save(model, isValid: boolean) {
       const data={
name:model.name,
clg:model.clg,
email:model.email,
address:model.add,
qua:model.qua,

}
 this.authService.updateagriprofile(data).subscribe(data=>{


   
      if(data.ok){
      
      this.flashMessage.show('Profile updated', {
          cssClass: 'alert-success',
          timeout: 1000});
      this.router.navigate(['agri/dashboard']);
      
    }
    else{
  this.flashMessage.show('error', {
          cssClass: 'alert-danger',
          timeout: 1000});
  
    }
  }); 
}


}
