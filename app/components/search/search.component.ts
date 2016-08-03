import { Component } from '@angular/core';
import { SpotifyService } from "../../serivces/spotify.service";
import { HTTP_PROVIDERS } from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [ HTTP_PROVIDERS, SpotifyService ]
})
export class SearchComponent {
  searchStr:string;
  SearchRes: Result[];

  constructor(private _SpotifyService: SpotifyService){
    // this.searchStr = 'green day';

  }
  searchMusic(){
    this._SpotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        this.SearchRes = res.artists.items;
      })
  }
}

class Result {
  id: number;
  name: string;
  genre: any;
}
