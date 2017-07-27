import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MusicgraphService {
  private api_key: string = 'c8303e90962e3a5ebd5a1f260a69b138';
  private url: string = 'http://api.musicgraph.com/api/v2/';

  constructor(private http: Http) { }

  public getArtist(id: string) {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.url + 'artist/' + id + '?api_key=' + this.api_key, options)
      .map(res => res.json())
  }
}
