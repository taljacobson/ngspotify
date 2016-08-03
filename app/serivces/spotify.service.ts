import { Injectable } from "@angular/core";
import { Http , Headers} from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private SearchUrl:string;
  private ArtistUrl:string;
  private AlbumUrl:string;
  private AlbumsUrl:string;
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
  getAlbums(artistid:string){
    this.AlbumsUrl = 'https://api.spotify.com/v1/artists/' + artistid + '/albums' ;
    return this._http.get(this.AlbumsUrl)
      .map(res => res.json())
  }

  getAlbum(id:string){
    this.AlbumUrl = 'https://api.spotify.com/v1/albums/' + id ;
    return this._http.get(this.AlbumUrl)
      .map(res => res.json())
  }
}
