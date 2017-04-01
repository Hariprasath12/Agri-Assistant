import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-logtrack',
  templateUrl: './logtrack.component.html',
  styleUrls: ['./logtrack.component.css']
})
export class LogtrackComponent implements OnInit {
wtrack:Boolean=false;
trackd:any;
  constructor(private authService:AuthService,
  	private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

   ontrack(event){
this.wtrack=true;


 this.authService. trackbyid(event.track).subscribe(pay=>{
    
   this.trackd=pay[0].track[0].location;
   console.log(pay);
    
},
  err=>{
    console.log("error");
    return false;
  });

 }
 close(){
   this.wtrack=false;
 }

}
