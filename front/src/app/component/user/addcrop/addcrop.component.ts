import { Component, OnInit , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addcrop',
  templateUrl: './addcrop.component.html',
  styleUrls: ['./addcrop.component.css']
})
export class AddcropComponent implements OnInit {
crop:String;
  constructor() { }

  ngOnInit() {
  }
  @Output() add =new EventEmitter();
  oncropSubmit(){
  	const a={
  		crops:this.crop
  	}
  	
   
this.add.emit({crops:a});
}}


