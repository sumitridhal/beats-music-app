import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyLocalService {
  private client_id: string = '6cbfcfb038624f5180940f32a3892e7e'; // Your client id
  private client_secret: string = '3a61852cf2684d97b0d52784994a9c04'; // Your secret
  private base64: string = 'NmNiZmNmYjAzODYyNGY1MTgwOTQwZjMyYTM4OTJlN2U6M2E2MTg1MmNmMjY4NGQ5N2IwZDUyNzg0OTk0YTljMDQ='
  private redirect_uri: string = 'http://localhost:9000/#/browse'; // Your redirect uri
  url: string = 'https://api.spotify.com/v1/';

  constructor(private http: Http, private https: HttpClient) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' +
      'BQDZNDIOsKHpGcETx1DD8oyG7b1-kHTyP7jAH3ynUre-WXP3jpRidHqZ_H-gRYNiB0Ms0AUdeZhmTLzPuBisoBJV5aDPENh82TFSpn9oLjsjqgAyCotOsEYXrXOzuz7XAUXA95vbaTe-5-ucJiacMr0Am0tehsFVVxkdTW8cCS65NShTWruv5VukusY3BjHQhDU3_wL9P_2srQPcS0ag8YQXlYIyB_u35CfqWHPlnbrAosJJbAqBW_-K48tWTH1Ppwh_udAkjr2ptMYt5JkvXNXyCU47uIH5_VSpKHQHfGUVmHc4K2io8hKVIn200rSZE7_NVqa3GAHyEPf547g'
    );
  }


  public authorize() {
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers = headers.append('Access-Control-Allow-Origin', 'http://localhost:9000');
    headers = headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
    headers = headers.append('Authorization', 'Basic NmNiZmNmYjAzODYyNGY1MTgwOTQwZjMyYTM4OTJlN2U6M2E2MTg1MmNmMjY4NGQ5N2IwZDUyNzg0OTk0YTljMDQ='); //btoa(this.client_id + ':' + this.client_secret)

    // let headers = new Headers();
    // headers.append('Content-Type','application/x-www-form-urlencoded');
    // headers.append('Accept', 'application/json');
    // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:9000');
    // headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
    // headers.append('Authorization', 'Basic NmNiZmNmYjAzODYyNGY1MTgwOTQwZjMyYTM4OTJlN2U6M2E2MTg1MmNmMjY4NGQ5N2IwZDUyNzg0OTk0YTljMDQ='); //btoa(this.client_id + ':' + this.client_secret)
    // let options = new RequestOptions({ headers: headers });

    let body = 'grant_type=client_credentials'
    return this.https.post('https://accounts.spotify.com/api/token', body, { headers }).map(res => res)
  }

  public searchArtist(value) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.url + 'search?type=artist&q=' + value, {
      headers: headers
    }).map(res => res.json())
  }

  public getArtistById(id) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.url + 'artists/' + id, {
      headers: headers
    }).map(res => res.json())
  }

  public getTrackById(id) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.url + 'tracks/' + id, {
      headers: headers
    }).map(res => res.json())
  }
}
