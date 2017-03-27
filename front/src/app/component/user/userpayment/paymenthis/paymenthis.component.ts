import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-paymenthis',
  templateUrl: './paymenthis.component.html',
  styleUrls: ['./paymenthis.component.css']
})
export class PaymenthisComponent implements OnInit {
history:any;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {

  	this.authService.userpaymenthis().subscribe(his=>{
    
     // console.log(his[0].pay_his);
this.history=his[0].pay_his;

},
  err=>{
  	console.log("error");
  	return false;
  });
  }

}
