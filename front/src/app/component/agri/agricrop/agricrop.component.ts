import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-agricrop',
  templateUrl: './agricrop.component.html',
  styleUrls: ['./agricrop.component.css']
})
export class AgricropComponent implements OnInit {
farmer:any;
farmermain:Boolean=false;
farmerid:any;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {

  	
  }
 onclickfarmer(event){

this.farmerid=event.data;
this.farmermain=true;
// console.log(this.farmerid);

  }

}
