import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';

import {Http, Headers,URLSearchParams,RequestOptions} from '@angular/http';

import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
//define the constant url we would be uploading to.
const URL = 'http://localhost:8000/api/upload';


@Component({
  selector: 'app-userproduct',
  templateUrl: './userproduct.component.html',
  styleUrls: ['./userproduct.component.css']
})

export class UserproductComponent implements OnInit {

public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
    //This is the default title property created by the angular cli. Its responsible for the app works 
    title = 'app works!';
constructor(private http:Http) {
   
  }

  ngOnInit() {
     this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
       
       this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            console.log("ImageUpload:uploaded:", item, status, response);
        };

  }
 


}
