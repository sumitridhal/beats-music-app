import { Component, OnInit } from '@angular/core';
import { SpotifyLocalService } from "../../services/spotify.service";
import { MusixmatchService } from "../../services/musixmatch.service";
import { MusicgraphService } from "../../services/musicgraph.service";


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  spotify: SpotifyLocalService;
  musixmatch: MusixmatchService;
  musicgraph: MusicgraphService;
  visibility: string = 'transition hidden';
  dimmed: string = '';
  duration: string = '500ms';

  constructor(spotify: SpotifyLocalService, musixmatch: MusixmatchService, musicgraph: MusicgraphService) {
    this.spotify = spotify;
    this.musixmatch = musixmatch;
    this.musicgraph = musicgraph;
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

    // this.musixmatch.getAlbum('14250417')
    //   .subscribe(data => {
    //     console.log(data);
    //   });

      // this.musicgraph.getArtist('ee2564c7-a6b5-11e0-b446-00251188dd67')
      // .subscribe(data => {
      //    console.log(data);
      //  });

    // this.spotify.getArtistById('0OdUWJ0sBjDrqHygGUXeCF ')
    // .subscribe(data => {
    //   console.log(data);
    // });

    this.spotify.implicitGrant()
    .subscribe(data => {
      console.log(data);
    });

    // this.spotify.clientCredentials()
    // .subscribe(data => {
    //   console.log(data);
    // });

  }

}
