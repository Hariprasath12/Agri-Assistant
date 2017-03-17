import { Component, OnInit , Output, EventEmitter } from '@angular/core';
 import {AuthService} from '../../../../servies/auth.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
title:String;
content:String;
tag:any;
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
@Output() userCreated =new EventEmitter();

  onpostSubmit(){

const addpost={
  title:this.title,
  content:this.content,
  tag:this.tag.split(",")
 }
 	this.userCreated.emit({post:addpost});





}}
