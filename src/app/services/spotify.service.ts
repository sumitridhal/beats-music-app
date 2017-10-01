//https://atchai.com/blog/2016-05-03-in-search-of-the-perfect-music-dataset/

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IntervalObservable } from 'rxjs/Observable/IntervalObservable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Injectable()
export class SpotifyLocalService {
  private access_token: any;
  private url: string = 'https://api.spotify.com/v1/';
  private aws: string = 'http://localhost:3000';
  public newReleases: BehaviorSubject<{}> = new BehaviorSubject({});
  public artistList: BehaviorSubject<{}> = new BehaviorSubject({});
  public spotifyPlaylist: BehaviorSubject<{}> = new BehaviorSubject({});
  public playlist01: BehaviorSubject<{}> = new BehaviorSubject({});
  public playlist02: BehaviorSubject<{}> = new BehaviorSubject({});
  public playlist03: BehaviorSubject<{}> = new BehaviorSubject({});
  public playlist04: BehaviorSubject<{}> = new BehaviorSubject({});
  public playlist05: BehaviorSubject<{}> = new BehaviorSubject({});

  constructor(private http: Http) {
    let that = this;
    // IntervalObservable.create(3600).subscribe(n => {
    //   console.log('interval');
    //   this.searchArtist('adele')
    //   .subscribe(data => {
    //       console.log(JSON.stringify(data,null,4));
    //     });
    // });

    //21pz7umxlqgx5gnpo7pzg7rna
    //this.getData('users/spotify/playlists').subscribe(data => console.log(data));
    //this.getData('users/digster.co.uk/playlists').subscribe(data => console.log(data));
    this.getData('users/21pz7umxlqgx5gnpo7pzg7rna/playlists').subscribe(list => that.playlist01.next(list));
    this.getData('users/digster.co.uk/playlists?offset=0&limit=24').subscribe(list => that.playlist02.next(list));
    this.getData('users/starbucks/playlists?offset=0&limit=24').subscribe(list => that.playlist03.next(list));
    this.getData('users/filtr/playlists?offset=0&limit=24').subscribe(list => that.playlist04.next(list));
    this.getData('users/filtr.ca/playlists?offset=1&limit=25').subscribe(list => that.playlist05.next(list));

    // this.getData('artists?ids=04gDigrS5kc9YWfZHwBETP,4dpARuHxo51G3z768sgnrY,5Pwc4xIPtQLFEnJriah9YJ,06HL4z0CvFAxyc27GXpf02,5pKCCKE2ajJHZ9KAiaK11H,6VuMaDnrHyPL1p4EHjYLi7,1UTPBmNbXNTittyMJrNkvw')
    //   .subscribe(data => {
    //     console.log(data);
    //   });
    //
    // this.getData('recommendations/available-genre-seeds')
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
    let releases = this.getData('browse/new-releases?country=US&offset=0&limit=48')
    let artists = this.getData('artists?ids=04gDigrS5kc9YWfZHwBETP,4dpARuHxo51G3z768sgnrY,5Pwc4xIPtQLFEnJriah9YJ,06HL4z0CvFAxyc27GXpf02,6VuMaDnrHyPL1p4EHjYLi7,1UTPBmNbXNTittyMJrNkvw')
    let spotify_playlist = this.getData('users/spotify/playlists?offset=0&limit=48')

    return Observable.forkJoin([releases, artists, spotify_playlist])
      .toPromise()
      .then((result: any) => {
        this.newReleases.next(result[0].albums.items)
        this.artistList.next(result[1].artists)
        this.spotifyPlaylist.next(result[2].items)
      })
      .catch((err: any) => Promise.resolve());;

  }

  public getLocalMeta(id): Observable<any> {
    let meta = [
      {
        "id": "04gDigrS5kc9YWfZHwBETP",
        "bio": "MAROON 5 IS AN AMERICAN POP ROCK BAND THAT ORIGINATED IN LOS ANGELES, CALIFORNIA. IT CURRENTLY CONSISTS OF LEAD VOCALIST ADAM LEVINE, KEYBOARDIST AND RHYTHM GUITARIST JESSE CARMICHAEL, BASSIST MICKEY MADDEN, LEAD GUITARIST JAMES VALENTINE, DRUMMER MATT FLYNN AND KEYBOARDIST PJ MORTON. A MIX OF POLISHED POP/ROCK AND NEO-SOUL MADE MAROON 5 ONE OF THE MOST POPULAR BANDS OF THE NEW MILLENNIUM, WITH SONGS LIKE \"THIS LOVE, \" \"SHE WILL BE LOVED, \" AND \"MAKES ME WONDER\" ALL TOPPING THE CHARTS WORLDWIDE.",
        "headerImages": [
          {
            "height": 641,
            "url": "https://i.scdn.co/image/d5d36ef5919bb439fb457549fdc4a0dcfe7b12f4",
            "width": 1495
          },
          {
            "height": 1140,
            "url": "https://i.scdn.co/image/1b030260de8e8ac65c60fd28c55def8229d56d79",
            "width": 2660
          },
          {
            "height": 640,
            "url": "https://i.scdn.co/image/5c8d92ef8f02482fbafcdaf4c54a5036795bfb50",
            "width": 1494
          }
        ]
      }, {
        "id": "06HL4z0CvFAxyc27GXpf02",
        "bio": "Taylor Swift is that rarest of pop phenomena: a superstar who managed to completely cross over from country to the mainstream. Other singers performed similar moves -- notably, Dolly Parton and Willie Nelson both became enduring mainstream icons based on their '70s work -- but Swift shed her country roots like they were a second skin; it was a necessary molting to reveal she was perhaps the sharpest, savviest populist singer/songwriter of her generation, one who could harness the Zeitgeist and turn it personal and, just as impressively, perform the reverse.",
        "headerImages": [
          {
            "height": 641,
            "url": "https://i.scdn.co/image/fedadb793b59f10bc5946043196e932530604a59",
            "width": 1495
          },
          {
            "height": 1140,
            "url": "https://i.scdn.co/image/fb11623281343e336de1cd133ac3a02cea038702",
            "width": 2660
          },
          {
            "height": 640,
            "url": "https://i.scdn.co/image/e0a14d9225567dd6b5eb979dcbcd197896ff91de",
            "width": 1494
          }
        ]
      }, {
        "id": "4dpARuHxo51G3z768sgnrY",
        "bio": "When the U.K. press began dubbing Adele \"the next Amy Winehouse\" in late 2007, the hype didn't touch upon the singer/songwriter influence found in the Londoner's music. Influenced by Roberta Flack and Suzanne Vega as much as Jill Scott, Adele soon became a phenomenon in her own right; her second album, 21, eventually sold an estimated 30 million copies worldwide, making her one of the few sales successes in an age of digital streaming.",
        "headerImages": [
          {
            "height": null,
            "url": "https://artistheader.scdn.co/4dpARuHxo51G3z768sgnrY/desktop_cat/4e6467c0-2f56-48ee-b8e1-78cb560a8222",
            "width": null
          }
        ]
      }, {
        "id": "5Pwc4xIPtQLFEnJriah9YJ",
        "bio": "Featuring the anthemic songwriting of Ryan Tedder, and balancing pop with alternative rock influences, OneRepublic became a regular presence on the charts of North America, Europe, and Australasia beginning with their 2007 debut. A Timbaland remix of its lead single, \"Apologize,\" landed in the Top Three in well over dozen countries and was, at the time, the best-selling digital download in U.S. history.",
        "headerImages": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/258cd5da9bdf6dfcab8c3fe3c47f398b771d38bc",
            "width": null
          }
        ]
      }, {
        "id": "6VuMaDnrHyPL1p4EHjYLi7",
        "bio": "American pop singer/songwriter Charlie Puth began his career with acoustic covers uploaded to YouTube. Ellen DeGeneres was an early supporter and she signed the Berklee College alum -- along with his duet partner, Emily Luther -- to her Warner Bros.-affiliated ElevenEleven label. Though nothing materialized from that deal, Puth eventually signed with Atlantic. In early 2015, he released his debut single, \"Marvin Gaye,\" a duet with Meghan Trainor. Shortly thereafter, he gained greater exposure as the co-songwriter, pianist, and featured vocalist on Wiz Khalifa's \"See You Again,\" recorded as a tribute to actor Paul Walker for the soundtrack to Furious 7.",
        "headerImages": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/4c6a7087672062b84b5f77241106122004da1fbd",
            "width": null
          }
        ]
      }, {
        "id": "1UTPBmNbXNTittyMJrNkvw",
        "bio": "Blake Shelton may have been an unlikely candidate for superstardom but that's hardly due to a lack of charisma. Shelton possessed a warm, masculine ease that lent his rowdier numbers a sense of sly humor but this relaxed touch also made him an effective crooner of ballads, the ace in the hole that helped him cross over from country to the mainstream in the 2010s.",
        "headerImages": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/5b8668d9da9af210360b7af8fdca2bff543648db",
            "width": null
          }
        ]
      }];

    let result = meta.filter((x) => x.id == id)
    return Observable.of(result[0]).delay(0);
  }

  public getNewReleases(): Observable<any> {
    return this.newReleases.asObservable();
  }

  public getArtistList(): Observable<any> {
    return this.artistList.asObservable();
  }

  public getSpotifyPlaylist(): Observable<any> {
    return this.spotifyPlaylist.asObservable();
  }

  public getMyPlaylists(): Observable<any> {
    return this.playlist01.asObservable();
  }

  public getPlaylist02(): Observable<any> {
    return this.playlist02.asObservable();
  }

  public getPlaylist03(): Observable<any> {
    return this.playlist03.asObservable();
  }

  public getPlaylist04(): Observable<any> {
    return this.playlist04.asObservable();
  }

  public getPlaylist05(): Observable<any> {
    return this.playlist05.asObservable();
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
