import { Component, OnInit } from '@angular/core';
import { SpotifyLocalService } from '../../services/spotify.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})

export class BrowseComponent implements OnInit {
  spotify: SpotifyLocalService;
  public newReleases: any;

  constructor(spotify: SpotifyLocalService) {
    this.spotify = spotify;
  }

  ngOnInit() {
    this.spotify.getData('browse/new-releases?country=US&offset=0&limit=6')
      .subscribe(data => {
        this.newReleases = data.albums.items;
        console.log(data);
      })

  }

}
