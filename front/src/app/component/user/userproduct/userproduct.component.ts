import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import { FileUploader } from 'ng2-file-upload';
import {Http, Headers,URLSearchParams,RequestOptions} from '@angular/http';

import{Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-userproduct',
  templateUrl: './userproduct.component.html',
  styleUrls: ['./userproduct.component.css']
})
export class UserproductComponent implements OnInit {

apiEndPoint:any="http://localhost:3000/users/upload";
constructor(private http:Http) {
   
  }

  ngOnInit() {
  }
  //  public uploader:FileUploader = new FileUploader({url: "http://localhost:3000/users/upload"});
  // public hasBaseDropZoneOver:boolean = false;
  // public hasAnotherDropZoneOver:boolean = false;
 
  // public fileOverBase(e:any):void {
  //   this.hasBaseDropZoneOver = e;
  // }
 
  // public fileOverAnother(e:any):void {
  //   this.hasAnotherDropZoneOver = e;
  // }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post(`${this.apiEndPoint}`, formData, options)
            .map(res => res.json())
            
            .subscribe(
                data => console.log('success'),
                error => console.log(fileList)
            )
    }
}

}
