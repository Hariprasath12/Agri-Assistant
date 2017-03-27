import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {AuthService} from '../../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-paymenttemp',
  templateUrl: './paymenttemp.component.html',
  styleUrls: ['./paymenttemp.component.css']
})
export class PaymenttempComponent implements OnInit {
money:Number;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
  
  }
@Output() add =new EventEmitter();
  onaddSubmit(){
  	const a={
  		rs:this.money
  	}
   
this.add.emit({rs:a});
}}
