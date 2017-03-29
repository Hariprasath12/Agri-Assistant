import { Component, OnInit,Input } from '@angular/core';
import {AuthService} from '../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-croplist',
  templateUrl: './croplist.component.html',
  styleUrls: ['./croplist.component.css']
})
export class CroplistComponent implements OnInit {
@Input() crops;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
  }

}
