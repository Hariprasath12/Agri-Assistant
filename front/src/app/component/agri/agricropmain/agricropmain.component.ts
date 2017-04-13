import { Component, OnInit,Input } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-agricropmain',
  templateUrl: './agricropmain.component.html',
  styleUrls: ['./agricropmain.component.css']
})
export class AgricropmainComponent implements OnInit {
@Input() farmerid;
form:boolean=true;
cname:String;
des:String;
  constructor(private authService:AuthService,
  	private router:Router) { 
  }

  ngOnInit() {
  }
submitdes(){
	// this.form=false;
// console.log(this.des);
// console.log(this.cname);
// console.log(this.farmerid._id);
const data={
	id:this.farmerid._id,
	des:this.des,
	crop:this.cname
}
const update={
	des:this.des,
	cropname:this.cname,
	date:new Date()
}
this.des="";
this.cname="";



 this.authService.updatecropdiary(data).subscribe(pro=>{
// console.log(pro);
this.farmerid.cropdiary.push(update);
// console.log(this.farmerid);
 })
}
}
