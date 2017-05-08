import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';


@Component({
  selector: 'app-retproduct',
  templateUrl: './retproduct.component.html',
  styleUrls: ['./retproduct.component.css']
})
export class RetproductComponent implements OnInit {
 lat: number ;
  lng: number;
  zoom:Number=15;
  map:boolean=false;
  constructor(private authService:AuthService) { }

  
  ngOnInit() {
  	this.authService.getlocationret().subscribe(pay=>{
  // console.log(pay[0].loc[0]);
    this.lat=pay[0].loc[0].lat;
    this.lng=pay[0].loc[0].lon;

     
     
    
    
},
  err=>{
    console.log("error");
    return false;
  });
   }

  }


