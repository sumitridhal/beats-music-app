import { Component, OnInit } from '@angular/core';
import { SpotifyLocalService } from "../../services/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  spotify: SpotifyLocalService;
  visibility: string = 'transition hidden';
  dimmed: string = '';
  duration: string = '500ms';

  constructor(spotify: SpotifyLocalService) {
    this.spotify = spotify;
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

    // this.musixmatch.getAlbum('1YcUpUihfAEU7L85e3VZQO')
    //   .subscribe(data => {
    //     console.log(JSON.stringify(data,null,4));
    //   });

    // this.musicgraph.getArtist('ee2564c7-a6b5-11e0-b446-00251188dd67')
    // .subscribe(data => {
    //    console.log(data);
    //  });

    // this.spotify.getArtistById('0OdUWJ0sBjDrqHygGUXeCF ')
    // .subscribe(data => {
    //   console.log(data);
    // });
    //
    // this.spotify.searchArtist('Adele')
    // .subscribe(data => {
    //   console.log(data);
    // });

  }

}
