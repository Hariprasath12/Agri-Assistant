import { Component,OnInit, OnDestroy } from '@angular/core';
import * as io from 'socket.io-client';
import { ChatService } from '../../../servies/chat.service';
import {AuthService} from '../../../servies/auth.service';


import{Router} from '@angular/router';
@Component({
  selector: 'app-agrichat',
  templateUrl: './agrichat.component.html',
  styleUrls: ['./agrichat.component.css']
})
export class AgrichatComponent implements OnInit {
messages = []; 
connection; 
message;
socket;
user="ram";
room="hjk";
listuser=[];
list;
 constructor(private chatService:ChatService,private authService:AuthService) {
}
ngOnInit() {
        this.authService.getProfileagri().subscribe(profile=>{


this.user=profile[0].name;


  },
  err=>{
    console.log("error");
    return false;
  });
 // console.log(this.room);



this.connection=this.chatService.getuser().subscribe(message => { 
    this.listuser.push(message);
    console.log(message);
     }) 
 
   this.connection = this.chatService.getMessages().subscribe(message => { 
    this.messages.push(message);
     }) 
this.chatService.joinroom(this.user,this.room);
 } 


  

sendMessage(){
    this.chatService.sendMessage(this.message,this.user);
    console.log(this.listuser);
     this.message = ''; 


 } 
   ngOnDestroy() { 
   	this.connection.unsubscribe();
   	 }


}
