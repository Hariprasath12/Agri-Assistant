import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-rettrack',
  templateUrl: './rettrack.component.html',
  styleUrls: ['./rettrack.component.css']
})
export class RettrackComponent implements OnInit {
wtrack:Boolean=false;
trackd:any;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
}
 ontrack(event){
this.wtrack=true;


 this.authService.trackbyref(event.track).subscribe(pay=>{
    
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
