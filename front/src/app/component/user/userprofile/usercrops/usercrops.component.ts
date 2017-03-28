import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-usercrops',
  templateUrl: './usercrops.component.html',
  styleUrls: ['./usercrops.component.css']
})
export class UsercropsComponent implements OnInit {
crops:any;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
this.authService.getcrops().subscribe(crops=>{
    
     this.crops=crops.crops;

console.log(this.crops);



},
  err=>{
  	console.log("error");
  	return false;
  });


  	



  }

}
