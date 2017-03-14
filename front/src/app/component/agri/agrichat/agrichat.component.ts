import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';

import{Router} from '@angular/router';
@Component({
  selector: 'app-agrichat',
  templateUrl: './agrichat.component.html',
  styleUrls: ['./agrichat.component.css']
})
export class AgrichatComponent implements OnInit {

  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
  }

}
