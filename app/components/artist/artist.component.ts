import { Component } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";

import { SpotifyService } from "../../serivces/spotify.service";

import { Artist } from "../../modal/artist";
import { Album } from "../../modal/album";

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
    providers: [ SpotifyService ]
})
export class ArtistComponent {
  id: string;
  artist: Artist[];
  albums: Album[];

  constructor( private route: ActivatedRoute, private _SpotifyService:SpotifyService ){
    this.id = route.snapshot.params['id']
    this._SpotifyService.getArtist(this.id).subscribe( artist => {
       this.artist = artist;
     });
     this._SpotifyService.getAlbums(this.id).subscribe( albums => {
       this.albums = albums.items;
     } )
  }
}
