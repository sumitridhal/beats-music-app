import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SpotifyLocalService } from '../../services/spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  spotify: SpotifyLocalService;
  public myPlaylist: any;
  public playlist02: any;
  public playlist03: any;
  public playlist04: any;
  public playlist05: any;
  public spotifyP: any;
  constructor(spotify: SpotifyLocalService) {
    this.spotify = spotify;
  }

  ngOnInit() {
    this.spotify.getMyPlaylists()
      .subscribe(data => {
          this.myPlaylist = data.items;
      })

      this.spotify.getPlaylist02()
        .subscribe(data => {
            this.playlist02 = data.items;
        })

        this.spotify.getPlaylist03()
          .subscribe(data => {
              this.playlist03 = data.items;
          })

          this.spotify.getPlaylist04()
            .subscribe(data => {
                this.playlist04 = data.items;
            })

            this.spotify.getPlaylist05()
              .subscribe(data => {
                  this.playlist05 = data.items;
              })

        this.spotify.getSpotifyPlaylist()
          .subscribe(data => {
            this.spotifyP = data;
          })
  }

}
