import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';

@Component({
  selector: 'app-retlocation',
  templateUrl: './retlocation.component.html',
  styleUrls: ['./retlocation.component.css']
})
export class RetlocationComponent implements OnInit {

  constructor(private authService:AuthService) { }
lat:Number;
lon:Number;
a:any;
loc:boolean=true;
   setPosition(position){
      this.lat = position.coords.latitude;
      this.lon=position.coords.longitude;

      this.a={
        lat:this.lat,
        lon:this.lon
      }
      
      }
  ngOnInit() {
  	this.authService.getlocationret().subscribe(pay=>{
  
     if(pay[0].loc.length!=0){
  this.loc=false;
     }
     
     
    
    
},
  err=>{
    console.log("error");
    return false;
  });
  }
  

setlocation(){
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
       };

   this.authService. updatelocret(this.a).subscribe(pay=>{
    console.log(pay);
    if(pay.ok==1){
      this.loc=false;
    }
    
},
  err=>{
    console.log("error");
    return false;
  });
}
}
