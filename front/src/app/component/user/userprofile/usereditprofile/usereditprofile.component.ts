import { Component, OnInit,Input } from '@angular/core';
import {AuthService} from '../../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';




@Component({
  selector: 'app-usereditprofile',
  templateUrl: './usereditprofile.component.html',
  styleUrls: ['./usereditprofile.component.css']
})
export class UsereditprofileComponent implements OnInit {
@Input() post;
posts:any;

  constructor(private authService:AuthService,
  	private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
console.log(this.post);
  	this.posts={
      name:this.post[0].name,
      irr:this.post[0].irr,
      address:this.post[0].address,
      acres:this.post[0].acres,
      farm:this.post[0].farm,
      soil:this.post[0].soiltype
     
    }
  	
  }
   save(model, isValid: boolean) {
       const data={
name:model.name,
irr:model.irr,
soiltype:model.soil,
address:model.add,
farm:model.farm,
acres:model.acres
}
  this.authService.updateuserprofile(data).subscribe(data=>{


   
      if(data.ok){
      
      this.flashMessage.show('Profile updated', {
          cssClass: 'alert-success',
          timeout: 1000});
      this.router.navigate(['user/dashboard']);
      
    }
    else{
  this.flashMessage.show('error', {
          cssClass: 'alert-danger',
          timeout: 1000});
  
    }
  });     





    }
 

}
