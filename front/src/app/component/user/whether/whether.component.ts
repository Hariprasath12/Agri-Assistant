import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-whether',
  templateUrl: './whether.component.html',
  styleUrls: ['./whether.component.css']
})
export class WhetherComponent implements OnInit {
high:Number;
low:Number;
  constructor(private authService:AuthService,
    private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {

  	this.authService.getweather().subscribe(post=>{
    this.high=post.forecast.simpleforecast.forecastday["0"].high.celsius;
    this.low=post.forecast.simpleforecast.forecastday["0"].low.celsius;
     
},
  err=>{
  	console.log("error");
  	return false;
  });
  	
  }

}
