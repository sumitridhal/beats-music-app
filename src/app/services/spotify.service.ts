//https://atchai.com/blog/2016-05-03-in-search-of-the-perfect-music-dataset/

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IntervalObservable } from 'rxjs/Observable/IntervalObservable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()
export class SpotifyLocalService {
  private access_token: any;
  private url: string = 'https://api.spotify.com/v1/';
  private aws: string = 'http://ec2-54-69-27-164.us-west-2.compute.amazonaws.com:3000';

  constructor(private http: Http) {
    // IntervalObservable.create(3600).subscribe(n => {
    //   console.log('interval');
    //   this.searchArtist('adele')
    //   .subscribe(data => {
    //       console.log(JSON.stringify(data,null,4));
    //     });
    // });

    // this.getData('artists?ids=04gDigrS5kc9YWfZHwBETP,4dpARuHxo51G3z768sgnrY,5Pwc4xIPtQLFEnJriah9YJ,06HL4z0CvFAxyc27GXpf02,5pKCCKE2ajJHZ9KAiaK11H,6VuMaDnrHyPL1p4EHjYLi7,1UTPBmNbXNTittyMJrNkvw')
    //   .subscribe(data => {
    //     console.log(data);
    //   });
    //
    // this.getData('artists/04gDigrS5kc9YWfZHwBETP/top-tracks?country=US')
    //   .subscribe(data => {
    //     console.log(data);
    //   });

    // this.getData('browse/new-releases?country=US')
    //   .subscribe(data => {
    //     console.log(data);
    //   });

    // this.getData('browse/featured-playlists?country=US&limit=20')
    //   .subscribe(data => {
    //     console.log(data);
    //   });
    //
    // this.getData('recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_tracks=0c6xIDDpzE81m2q797ordA&min_energy=0.4&min_popularity=50&market=US')
    //   .subscribe(data => {
    //     console.log(data);
    //   });

    //this.getData('tracks/3n3Ppam7vgaVa1iaRUc9Lp').subscribe(data => console.log(data));

    //this.getData('users/spotifycharts/playlists').subscribe(data => console.log(data));

    //
    // this.getData('browse/categories')
    //   .subscribe(data => {
    //     console.log(data);
    //   });
    //
    //
    // this.getData('browse/categories/party')
    //   .subscribe(data => {
    //     console.log(data);
    //   });
    //

    //
    // this.getData('users/spotify_espa%C3%B1a/playlists/21THa8j9TaSGuXYNBU5tsC/tracks')
    //   .subscribe(data => {
    //     console.log(data);
    //   });
    //
    //
    // this.getData('tracks/3n3Ppam7vgaVa1iaRUc9Lp').subscribe(data => console.log(data));


    // this.getData('users/21pz7umxlqgx5gnpo7pzg7rna/playlists')
    //   .subscribe(data => {
    //     console.log(data);
    //   });
    //
    // this.getData('me/player/currently-playing')
    //   .subscribe(data => {
    //     console.log(data);
    //   });
    //
    // this.getData('me/following?type=artist&limit=20')
    //   .subscribe(data => {
    //     console.log(data);
    //   });
    //
    // this.getData('me/top/artists')
    //   .subscribe(data => {
    //     console.log(data);
    //   });
    //
    // this.getData('me/player/recently-played')
    //   .subscribe(data => {
    //     console.log(data);
    //   });

  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + this.access_token);
  }

  clientCredentials(): Promise<any> {
    // this.access_token = null;
    // return this.http.get(this.aws + '/token')
    //   .map(res => res.json())
    //   .toPromise()
    //   .then((data: any) => this.access_token = data.access_token)
    //   .catch((err: any) => Promise.resolve());

    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Boot clientCredentials Service");
        resolve();
      }, 1000);
    })
    return promise;
  }

  public getData(api) {
    return this.http.get(this.aws + '/token')
      .map(res => res.json())
      .switchMap(data => {
        this.access_token = data.access_token;
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.access_token);
        return this.http.get(this.url + api, {
          headers: headers
        }).map(res => res.json());
      })
  }


}
