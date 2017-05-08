import { Component,OnInit, OnDestroy } from '@angular/core';
import * as io from 'socket.io-client';
import { ChatService } from '../../../servies/chat.service';
import {AuthService} from '../../../servies/auth.service';


@Component({
  selector: 'app-userchat',
  templateUrl: './userchat.component.html',
  styleUrls: ['./userchat.component.css']
})
export class UserchatComponent implements OnInit {


messages = []; 
connection; 
message;
socket;
user="hari";
room="hjk";
listuser=[];
list;

  constructor(private chatService:ChatService,private authService:AuthService) {
  
 
  }

  
   
 ngOnInit() {
        this.authService.getProfile().subscribe(profile=>{


this.user=profile[0].name;


  },
  err=>{
    console.log("error");
    return false;
  });
 // console.log(this.room);



this.connection=this.chatService.getuser().subscribe(message => { 
    this.listuser.push(message);
    console.log(this.listuser);
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
