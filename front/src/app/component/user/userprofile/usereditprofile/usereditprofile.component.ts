import { Component, OnInit,Input } from '@angular/core';
import {AuthService} from '../../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-usereditprofile',
  templateUrl: './usereditprofile.component.html',
  styleUrls: ['./usereditprofile.component.css']
})
export class UsereditprofileComponent implements OnInit {
@Input() post;
posts:any;

  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
  	
  	
  }
   save(model, isValid: boolean) {
        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
    }
  // ngOnChanges(changes) {
  //   console.log('Changed', changes.post.currentValue, changes.post.previousValue);
  // }

}
