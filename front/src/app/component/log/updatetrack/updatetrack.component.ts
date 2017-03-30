import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-updatetrack',
  templateUrl: './updatetrack.component.html',
  styleUrls: ['./updatetrack.component.css']
})
export class UpdatetrackComponent implements OnInit {
id:String;
loc:String;
  constructor(private authService:AuthService,
  	private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }
 
  onupSubmit(){
  	const data={
      id:this.id,
      loc:this.loc
    }
this.authService.updatetrack(data).subscribe(pay=>{
    
   console.log(pay);
    
},
  err=>{
    console.log("error");
    return false;
  });



  }

}
