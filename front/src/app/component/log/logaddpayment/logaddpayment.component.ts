import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-logaddpayment',
  templateUrl: './logaddpayment.component.html',
  styleUrls: ['./logaddpayment.component.css']
})
export class LogaddpaymentComponent implements OnInit {
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
}

}
