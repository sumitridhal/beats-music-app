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
  img: string = '';
  name: string = '';
  about: any;
  headerImages: string = '';

  constructor(spotify: SpotifyLocalService, private route: ActivatedRoute) {
    this.spotify = spotify;
  }

  ngOnInit() {
    // Get parent ActivatedRoute of this route.
    this._subscription1 = this.route.params.subscribe(params => {
      this.artistId = params['id'];
      this.headerImages = null;
      console.log(params);

      this.spotify.getLocalMeta(this.artistId).subscribe(data => {
        if (data) {
          this.about = data.bio
          this.headerImages = data.headerImages[0].url;
        } else { this.headerImages = this.img; }
      });

      this.spotify.getData('artists/' + this.artistId).subscribe(data => {
        this.img = data.images[0].url;
        this.name = data.name
        this.artistMeta = data;
        if(!this.headerImages) {
          this.headerImages = this.img;
        }
      });

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
