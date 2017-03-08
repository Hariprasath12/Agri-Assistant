import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
  }
  onLogoutClick(){
  	this.authService.logout()
 	this.router.navigate(['/login']);
    return false;
  }

}
