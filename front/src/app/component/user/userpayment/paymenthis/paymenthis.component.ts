import { Component, OnInit,Input } from '@angular/core';
import {AuthService} from '../../../../servies/auth.service';
import{Router} from '@angular/router';
import { SortbydatePipe } from './../../../../pipes/sortbydate.pipe';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-paymenthis',
  templateUrl: './paymenthis.component.html',
  styleUrls: ['./paymenthis.component.css']
})
export class PaymenthisComponent implements OnInit {
@Input() history;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {

  	
  }

}
