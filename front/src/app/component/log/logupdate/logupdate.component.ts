import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-logupdate',
  templateUrl: './logupdate.component.html',
  styleUrls: ['./logupdate.component.css']
})
export class LogupdateComponent implements OnInit {
loc:any;

  constructor(private authService:AuthService,
  	private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
      this.authService.getlocation().subscribe(pay=>{
    
    this.loc=pay[0].center;
    // console.log(pay[0].center);
    
},
  err=>{
    console.log("error");
    return false;
  });



  }
onadd(event){

this.authService.postlocation(event.loc).subscribe(rs=>{
	  if(rs.ok){
  this.authService.getlocation().subscribe(pay=>{
    
    this.loc=pay[0].center;
    console.log(pay[0].center);
    
},
  err=>{
    console.log("error");
    return false;
  });


      
      
      this.flashMessage.show('Location is added', {
          cssClass: 'alert-success',
          timeout: 1000});

      
    }
    else{
  this.flashMessage.show('someerror', {
          cssClass: 'alert-danger',
          timeout: 1000});
  
    }
});

}



 


}
