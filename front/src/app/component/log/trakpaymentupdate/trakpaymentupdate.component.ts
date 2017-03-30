import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-trakpaymentupdate',
  templateUrl: './trakpaymentupdate.component.html',
  styleUrls: ['./trakpaymentupdate.component.css']
})
export class TrakpaymentupdateComponent implements OnInit {
track:String;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
  }
   @Output() add =new EventEmitter();
  onaddSubmit(){
  	const a={
  		track:this.track
  	}
   
this.add.emit({track:a});
}

}
