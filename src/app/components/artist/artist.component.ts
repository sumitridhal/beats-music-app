import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SpotifyLocalService } from "../../services/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit, OnDestroy {
  spotify: SpotifyLocalService;
  private _subscription1: Subscription;
  artistId: number;
  artistMeta: any;
  public topTracks: any;
  public albums: any;

  constructor(spotify: SpotifyLocalService, private route: ActivatedRoute) {
    this.spotify = spotify;
  }

  ngOnInit() {
    // Get parent ActivatedRoute of this route.
    this._subscription1 = this.route.params.subscribe(params => {
      this.artistId = params['id'];
      console.log(params);

      this.spotify.getData('artists/' + this.artistId).subscribe(data => this.artistMeta = data);
      this.spotify.getData('artists/' + this.artistId + '/top-tracks?country=US').subscribe(data => {
        this.topTracks = null;
        this.topTracks = data.tracks
      });
      this.spotify.getData('artists/' + this.artistId + '/albums?country=US').subscribe(data => {
        this.albums = null; 
        this.albums = data.items
      });
    });

  }

  ngOnDestroy() {
    this._subscription1.unsubscribe();
  }

}
