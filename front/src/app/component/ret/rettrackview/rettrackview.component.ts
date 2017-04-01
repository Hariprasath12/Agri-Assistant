import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-rettrackview',
  templateUrl: './rettrackview.component.html',
  styleUrls: ['./rettrackview.component.css']
})
export class RettrackviewComponent implements OnInit {
@Input() trackd;
  constructor() { }

  ngOnInit() {
  }

}
