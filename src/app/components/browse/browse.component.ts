import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  visibility: string = 'transition hidden';
  dimmed: string = '';
  duration: string = '500ms';

  constructor() { }

  changeStyle($event) {
    if ($event.type == 'mouseover') {
      this.visibility = 'animating fade in';
      this.dimmed = 'dimmed';
      setTimeout(function() {
        this.visibility = 'visible active';
      }, 200);
    }
    else {
      this.visibility = 'animating fade out';
      this.dimmed = '';
      setTimeout(function() {
        this.visibility = 'transition hidden';
      }, 200);

    }

  }


  ngOnInit() {
  }

}
