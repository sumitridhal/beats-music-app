import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SpotifyLocalService } from "../../services/spotify.service";

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit, OnDestroy {
  spotify: SpotifyLocalService;

  private _subscription1: Subscription;
  artistId: number;
  artistMeta: any;
  // @ViewChild('target') target:ElementRef;
  img: string = '';
  name: string = '';
  bio: any;

  constructor(spotify: SpotifyLocalService, private route: ActivatedRoute) {
    this.spotify = spotify;
    this._subscription1 = this.route.params.subscribe(params => {
      this.artistId = params['id'];
      console.log(params);

      this.spotify.getData('artists/' + this.artistId).subscribe(data => {
        this.artistMeta = null;
        this.artistMeta = data;
        this.img = data.images[0].url;
        this.name = data.name
      });

      this.spotify.getLocalMeta(this.artistId).subscribe(data => {
        if (data) {
          this.bio = data.bio
        }

      });
    })
  }

  ngOnInit() {
  }

  // ngAfterViewInit(): void {
  //   this.target.nativeElement.style.color = "blue";
  // }

  ngOnDestroy() {
    this._subscription1.unsubscribe();
  }

}
