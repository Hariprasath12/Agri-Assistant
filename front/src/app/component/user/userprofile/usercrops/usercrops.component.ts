import { Component, OnInit,Input } from '@angular/core';
import {AuthService} from '../../../../servies/auth.service';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-usercrops',
  templateUrl: './usercrops.component.html',
  styleUrls: ['./usercrops.component.css']
})
export class UsercropsComponent implements OnInit {
@Input() crops;
  constructor(private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {

}

// ngOnChanges(changes) {
//     console.log('Changed', changes.crops.currentValue, changes.crops.previousValue);
//   }

deletecrop(a,id){
  // console.log(a);
  // console.log(id);



this.authService.deletecrops(id).subscribe(post=>{
      
  this.crops.splice(a,1);

      // console.log(post);
},
  err=>{
    console.log("error");
    return false;
  });



  }

}
