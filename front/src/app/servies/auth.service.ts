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


getProfilelog(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/log/profile',{headers: headers})
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
updatecropdiary(data){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/agri/cropdiary',data,{headers: headers})
      .map(res => res.json());

}

updateuserprofile(data){
  let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/profile',data,{headers: headers})
      .map(res => res.json());
}
updateagriprofile(data){
  let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/agri/profile',data,{headers: headers})
      .map(res => res.json());
}
updatelogprofile(data){
  let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/log/profile',data,{headers: headers})
      .map(res => res.json());
}
updateretprofile(data){
  let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/ret/profile',data,{headers: headers})
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
   getlocationuser(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/location',{headers: headers})
      .map(res => res.json());
  }
   getlocationret(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/ret/location',{headers: headers})
      .map(res => res.json());
  }

  updatelocret(a){
   let headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/ret/location',a,{headers: headers})
      .map(res => res.json());

}
 updatelocusers(a){
   let headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/location',a,{headers: headers})
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
updatesell(a){
   let headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/ret/sell',a,{headers: headers})
      .map(res => res.json());

}
prohis(a){
   let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/ret/prohis',a,{headers: headers})
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
  list(){
     let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/agri/list',{headers: headers})
      .map(res => res.json());

  }
prolistid(id){
     let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/ret/productid/'+id,{headers: headers})
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
logaddpayment(rs){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/log/addpayment',rs,{headers: headers})
      .map(res => res.json());

}
retaddpayment(rs){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/ret/addpayment',rs,{headers: headers})
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


getweather(){
return this.http.get('http://api.wunderground.com/api/35ff3b2e51125284/geolookup/conditions/forecast/q/India/Nasik.json')
      .map(res => res.json());

}

inittrack(data){
   let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/ret/inittrack',data,{headers: headers})
      .map(res => res.json());

}
trackbyid(id){

   let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/log/trackbyid/'+id.track,{headers: headers})
      .map(res => res.json());


}
product(){
  let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/ret/product',{headers: headers})
      .map(res => res.json());
}

trackbyref(id){

   let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/ret/trackbyid/'+id.track,{headers: headers})
      .map(res => res.json());


}
getlocation()
{
  let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/log/location',{headers: headers})
      .map(res => res.json());

}
postlocation(data)
{let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/log/location',data,{headers: headers})
      .map(res => res.json());

}
updatetrack(data){
  let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/log/updatetrack',data,{headers: headers})
      .map(res => res.json());

}
initproduct(data){
   let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/productinit',data,{headers: headers})
      .map(res => res.json());

}
productlist()
{
  let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/productlist',{headers: headers})
      .map(res => res.json());

}
retproduct(data){
  console.log(data);
  let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/ret/updatepayment',data,{headers: headers})
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