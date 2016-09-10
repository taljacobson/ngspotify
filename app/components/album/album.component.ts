import { Component } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";

import { SpotifyService } from "../../serivces/spotify.service";

import { Artist } from "../../modal/artist";
import { Album } from "../../modal/album";

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html',
    providers: [ SpotifyService ]
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
