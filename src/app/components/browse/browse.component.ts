import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SpotifyLocalService } from '../../services/spotify.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})

export class BrowseComponent implements OnInit, OnDestroy {
  spotify: SpotifyLocalService;
  public newReleases: any;
  public artistList: any;
  public spotifyPlaylist: any;
  aURL: string;
  private _subscription1: Subscription;

  constructor(spotify: SpotifyLocalService, private router: Router) {
    this.spotify = spotify;
    this._subscription1 = router.events.subscribe((route: any) => this.aURL = route.url);
  }

  ngOnInit() {
    this.spotify.getNewReleases()
      .subscribe(data => {
        this.newReleases = data;
      })

      this.spotify.getArtistList()
        .subscribe(data => {
          this.artistList = data;
        })

        this.spotify.getSpotifyPlaylist()
          .subscribe(data => {
            this.spotifyPlaylist = data;
          })
  }

  ngOnDestroy() {
    this._subscription1.unsubscribe();
  }

}
