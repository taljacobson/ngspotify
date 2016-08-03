import { Component } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { HTTP_PROVIDERS } from "@angular/http";

import { SpotifyService } from "../../serivces/spotify.service";

import { Artist } from "../../artist";
import { Album } from "../../album";

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html',
    providers: [HTTP_PROVIDERS, SpotifyService ]
})
export class AlbumComponent {
  id:string;
  album: Album[]
  constructor(private _SpotifyService: SpotifyService , private route: ActivatedRoute){
        this.id = route.snapshot.params['id'];

        this._SpotifyService.getAlbum(this.id).subscribe(album =>{
          this.album = album;
          console.log(this.album)
        })
  }
}
