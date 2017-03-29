import { Injectable } from '@angular/core';
import {Http, Headers,URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
      .map(res => res.json());
  }
   registeragri(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/agri/register', user,{headers: headers})
      .map(res => res.json());
  }
   registerlog(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/log/register', user,{headers: headers})
      .map(res => res.json());
  }
   registerret(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/ret/register', user,{headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
      .map(res => res.json());
  }
   authenticateagri(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/agri/authenticate', user,{headers: headers})
      .map(res => res.json());
  }
   authenticatelog(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/log/authenticate', user,{headers: headers})
      .map(res => res.json());
  }
   authenticateret(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/ret/authenticate', user,{headers: headers})
      .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/profile',{headers: headers})
      .map(res => res.json());
  }

  getProfileagri(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/agri/profile',{headers: headers})
      .map(res => res.json());
  }

cropdiary(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/cropdiary',{headers: headers})
      .map(res => res.json());

}




  getProfileret(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/ret/profile',{headers: headers})
      .map(res => res.json());
  }

getcrops(){
   let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/getCrops',{headers: headers})
      .map(res => res.json());

}

addcrops(a){
   let headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/updatecrops',a.crops,{headers: headers})
      .map(res => res.json());

}

deletecrops(id){
   let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.delete('http://localhost:3000/users/deletecrops/'+id,{headers: headers})
      .map(res => res.json());
}

 post(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/agri/post',{headers: headers})
      .map(res => res.json());
  }

addpost(post){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/agri/post',post,{headers: headers})
      .map(res => res.json());
  }
  deletepost(id){
    
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.delete('http://localhost:3000/agri/post/'+id,{headers: headers})
      .map(res => res.json());
  }
  userpayment(){

    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/payment',{headers: headers})
      .map(res => res.json());
  }
   retpayment(){

    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/ret/payment',{headers: headers})
      .map(res => res.json());
  }

logpayment(){

    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/log/payment',{headers: headers})
      .map(res => res.json());
  }

 userpaymenthis(){

    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/paymenthistory',{headers: headers})
      .map(res => res.json());
  }
   retpaymenthis(){

    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/ret/paymenthistory',{headers: headers})
      .map(res => res.json());
  }

logpaymenthis(){

    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/log/paymenthistory',{headers: headers})
      .map(res => res.json());
  }

useraddpayment(rs){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/addpayment',rs,{headers: headers})
      .map(res => res.json());

}





  getProfilelog(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/log/profile',{headers: headers})
      .map(res => res.json());
  }

getAllPosts(){
   let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/posts',{headers: headers})
      .map(res => res.json());

}




  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
   
  loggedIn(){
    return tokenNotExpired();
    
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
     
  }
}