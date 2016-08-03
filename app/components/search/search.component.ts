import { Component } from '@angular/core';
import { SpotifyService } from "../../serivces/spotify.service";
import { HTTP_PROVIDERS } from "@angular/http";
import { Router, ROUTER_DIRECTIVES } from "@angular/router";

import { Artist } from "../../artist";
import { Album } from "../../album";

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    directives:[ ROUTER_DIRECTIVES ],
    providers: [ HTTP_PROVIDERS, SpotifyService ]
})
export class SearchComponent {
  searchStr:string;
  SearchRes: Artist[];

  constructor(private _SpotifyService: SpotifyService, private _router:Router){
    // this.searchStr = 'green day';

  }
  searchMusic(){
    this._SpotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        this.SearchRes = res.artists.items;
      })
  }
  goToArtist(artist){
    this._router.navigate(['artist', artist.id])
  }
}
