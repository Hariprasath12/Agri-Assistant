import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import {Http, Headers,URLSearchParams,RequestOptions} from '@angular/http';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Response } from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';

import "rxjs/add/operator/do";

import "rxjs/add/operator/map";
const URL = 'http://localhost:3000/users/product';



@Component({
  selector: 'app-userproduct',
  templateUrl: './userproduct.component.html',
  styleUrls: ['./userproduct.component.css']
})

export class UserproductComponent implements OnInit {
name:String;
qua:Number;
des:String;
id:String;
img:Boolean=false;
form:Boolean=true;
public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});


  ngOnInit() {
   this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false;  };
   this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            // console.log("ImageUpload:uploaded:", item, status, response);
            // alert(response);
            if(response){
              this.img=false;
              this.form=true;
               this.flashMessage.show('You product uploaded', {
          cssClass: 'alert-success',
          timeout: 2000});
            }
        };
  }

  constructor(private http: Http, private el: ElementRef,private authService:AuthService
    ,private flashMessage:FlashMessagesService) {
  
  }

onProductSubmit(){
  const user={
    name:this.name,
    qua:this.qua,
    des:this.des
  }
  
  this.authService.initproduct(user).subscribe(data=>{
    console.log(data);
    this.form=false;
    this.img=true;


  })



}












//   upload() {
//         let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
//         console.log("iam+ "+inputEl);
//         let fileCount: number = inputEl.files.length;
//         let formData = new FormData();
//         if (fileCount > 0) { // a file was selected
//             for (let i = 0; i < fileCount; i++) {
//                 formData.append('photo', inputEl.files.item(i));
//             }
//             console.log(formData);
//             this.http
//                 .post(URL, formData).map((res:any) => res).subscribe(
//                     (success) => {
//                      alert(success._body);
//                   },
//                     (error) => alert(error)
//                 );
               
//         }
// }

}
