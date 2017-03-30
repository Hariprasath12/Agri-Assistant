import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-trackview',
  templateUrl: './trackview.component.html',
  styleUrls: ['./trackview.component.css']
})
export class TrackviewComponent implements OnInit {
@Input() trackd;
  constructor() { }

  ngOnInit() {
  }

}
