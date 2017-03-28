import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-usereditprofile',
  templateUrl: './usereditprofile.component.html',
  styleUrls: ['./usereditprofile.component.css']
})
export class UsereditprofileComponent implements OnInit {

  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
  }

}
