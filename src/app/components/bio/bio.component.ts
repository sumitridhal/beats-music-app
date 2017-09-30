import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SpotifyLocalService } from "../../services/spotify.service";

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  spotify: SpotifyLocalService;
  private _subscription1: Subscription;
  artistId: number;
  artistMeta: any;
  constructor(spotify: SpotifyLocalService, private route: ActivatedRoute) {
      this.spotify = spotify;
     }

     ngOnInit() {
       this._subscription1 = this.route.params.subscribe(params => {
         this.artistId = params['id'];
         console.log(params);
   
         this.spotify.getData('artists/' + this.artistId).subscribe(data => this.artistMeta = data);
       })

     }

     ngOnDestroy() {
       this._subscription1.unsubscribe();
     }

}
