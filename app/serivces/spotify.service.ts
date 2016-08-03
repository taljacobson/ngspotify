import { Injectable } from "@angular/core";
import { Http , Headers} from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private SearchUrl:string;
  private ArtistUrl:string;
  constructor(private _http:Http ){

  }
  searchMusic(str:string, type = 'artist'){
    this.SearchUrl = 'https://api.spotify.com/v1/search?query=' + str +'&offset=0&limit=20&type=' + type + '&market=US' ;
    return this._http.get(this.SearchUrl)
      .map(res => res.json())
  }

  getArtist(artistid:string){
    this.ArtistUrl = 'https://api.spotify.com/v1/artists/' + artistid ;
    return this._http.get(this.ArtistUrl)
      .map(res => res.json())
  }
}
