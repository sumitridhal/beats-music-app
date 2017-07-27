import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MusixmatchService {
  private apikey: string = '780809dc9ade9abb31131927f850f1cc';
  private url: string = 'http://api.musixmatch.com/ws/1.1/';

  constructor(private http: Http) { }

  public getAlbum(album_id: string) {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Accept', 'application/json');
    //headers.append("Access-Control-Allow-Credentials", "true");
    //headers.append("Access-Control-Allow-Origin", "*");
    //headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    //headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.url + 'album.get?album_id=' + album_id + '&apikey=' + this.apikey, options)
      .map(res => res.json())
  }

}
