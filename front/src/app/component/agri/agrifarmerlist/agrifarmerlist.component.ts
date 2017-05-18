import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-agrifarmerlist',
  templateUrl: './agrifarmerlist.component.html',
  styleUrls: ['./agrifarmerlist.component.css']
})
export class AgrifarmerlistComponent implements OnInit {
farmer:any;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {

   this.authService.list().subscribe(data=>{
console.log(data);
this.farmer=data;

  }); 
  }
  @Output() clickfarmer =new EventEmitter();
target(f){


  this.clickfarmer.emit({data:f});
}
}
