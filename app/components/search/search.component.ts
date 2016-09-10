import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { SpotifyService } from "../../serivces/spotify.service";

import { Artist } from "../../modal/artist";
import { Album } from "../../modal/album";

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [ SpotifyService ]
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
