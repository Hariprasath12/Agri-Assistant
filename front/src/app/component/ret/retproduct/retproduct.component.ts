import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retproduct',
  templateUrl: './retproduct.component.html',
  styleUrls: ['./retproduct.component.css']
})
export class RetproductComponent implements OnInit {
 lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
