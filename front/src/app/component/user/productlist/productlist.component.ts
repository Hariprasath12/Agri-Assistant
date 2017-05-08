import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';

import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
product:String;
  constructor(private authService:AuthService,
  	private router:Router,
     private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  	this.authService.productlist().subscribe(post=>{
   console.log(post[0].product);
     this.product=post[0].product;
},
  err=>{
  	console.log("error");
  	return false;
  });


  }

}
