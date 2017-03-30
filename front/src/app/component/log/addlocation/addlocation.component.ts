import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css']
})
export class AddlocationComponent implements OnInit {
loc:String;
phone:Number;
email:String;
address:String;

  constructor(private authService:AuthService,
  	private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {

  }
  @Output() add =new EventEmitter();
  onaddSubmit(){
  	const data={
  		loc:this.loc,
  		phone:this.phone,
  		email:this.email,
  		address:this.address
  	}
  
this.add.emit({loc:data});


  }

}
