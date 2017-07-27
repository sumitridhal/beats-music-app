import { Component, OnInit } from '@angular/core';
import { SpotifyLocalService } from "../../services/spotify.service";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  service: SpotifyLocalService;
  visibility: string = 'transition hidden';
  dimmed: string = '';
  duration: string = '500ms';

  constructor(service: SpotifyLocalService) {
    this.service = service;
  }

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
    // this.service.getArtistById('0OdUWJ0sBjDrqHygGUXeCF ')
    // .subscribe(data => {
    //   console.log(data);
    // });

    this.service.authorize()
    .subscribe(data => {
      console.log(data);
    });

  }

}
