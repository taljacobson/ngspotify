import { Component } from '@angular/core';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES} from "@angular/router";
import { HTTP_PROVIDERS } from "@angular/http";

import { SpotifyService } from "../../serivces/spotify.service";

import { Artist } from "../../artist";
import { Album } from "../../album";

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
    directives:[ ROUTER_DIRECTIVES ],
    providers: [HTTP_PROVIDERS, SpotifyService ]
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
