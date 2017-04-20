import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Subject } from 'rxjs/Subject'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {
private url = 'http://localhost:8000';
 private socket;
 a;
  constructor() { this.socket = io(this.url);
  }

   joinroom(name,room){
    // console.log(room);
     
    this.socket.emit('joinroom',{
       name:name,
    room:room 
      });
  }
  sendMessage(msg,name){ 
  	this.socket.emit('message', { name:name,
    text: msg}); 
    
  }
  getuser(){
    let observable = new Observable(observer => {
  this.socket = io(this.url); 
  this.socket.on('user', (data) => { 
    observer.next(data); 
    console.log(data);
  });
   return () => { 
     this.socket.disconnect(); 
   };
    })
    return observable; 
}


  

 



 getMessages() {
  let observable = new Observable(observer => {
  this.socket = io(this.url); 
  this.socket.on('message', (data) => { 
  	observer.next(data); 
    console.log(data);
  });
   return () => { 
   	this.socket.disconnect(); 
   };
    })
    return observable; 
}
}
