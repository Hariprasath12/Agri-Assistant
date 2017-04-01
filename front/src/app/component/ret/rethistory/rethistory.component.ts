import { Component, OnInit ,Input} from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-rethistory',
  templateUrl: './rethistory.component.html',
  styleUrls: ['./rethistory.component.css']
})
export class RethistoryComponent implements OnInit {
@Input() history;
  constructor(private authService:AuthService,
  	private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

}
