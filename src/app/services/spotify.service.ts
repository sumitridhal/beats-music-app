//https://atchai.com/blog/2016-05-03-in-search-of-the-perfect-music-dataset/

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()
export class SpotifyLocalService {
  private client_id: string = '6cbfcfb038624f5180940f32a3892e7e'; // Your client id
  private client_secret: string = '3a61852cf2684d97b0d52784994a9c04'; // Your secret
  private access_token: any;
  private redirect_uri: string = 'http://localhost:9000/#/browse'; // Your redirect uri
  private url: string = 'https://api.spotify.com/v1/';

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + this.access_token);
  }


  public authorizationCode() {
    let redirect_uri = 'http%3A%2F%2Flocalhost%3A9000%2F%23%2Fbrowse'
    let scope = 'user-read-private%20user-read-email%20streaming%20user-library-read%20playlist-read-private'
    let url = 'https://accounts.spotify.com/authorize/?client_id=' + this.client_id + '&response_type=code&redirect_uri=' + redirect_uri + '&scope=' + scope + '&state=34fFs29kd09';

    return this.http.get(url).map(res => res)
  }

  public implicitGrant() {
    let redirect_uri = 'http%3A%2F%2Flocalhost%3A9000%2F%23%2Fbrowse'
    let scope = 'user-read-private%20user-read-email%20streaming%20user-library-read%20playlist-read-private'
    let url = 'https://accounts.spotify.com/authorize/?client_id=' + this.client_id + '&response_type=code&redirect_uri=' + redirect_uri + '&scope=' + scope + '&response_type=token&state=123';

    return this.http.get(url).map(res => res)
  }

  clientCredentials(): Promise<any> {
    this.access_token = null;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:9000');
    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
    headers.append('Authorization', 'Basic NmNiZmNmYjAzODYyNGY1MTgwOTQwZjMyYTM4OTJlN2U6M2E2MTg1MmNmMjY4NGQ5N2IwZDUyNzg0OTk0YTljMDQ='); //btoa(this.client_id + ':' + this.client_secret)
    let options = new RequestOptions({ headers: headers });
    let body = 'grant_type=client_credentials'

    return this.http.post('https://accounts.spotify.com/api/token', body, options)
    .map(res => res.json())
            .toPromise()
            .then((data: any) => this.access_token = data.access_token)
            .catch((err: any) => Promise.resolve());

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
