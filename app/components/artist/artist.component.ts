import { Component } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { HTTP_PROVIDERS } from "@angular/http";

import { SpotifyService } from "../../serivces/spotify.service";

import { Artist } from "../../artist";
import { Album } from "../../album";

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
    providers: [HTTP_PROVIDERS, SpotifyService ]
})
export class ArtistComponent {
  id: string;
  artist: Artist[];
  album: Album[];

  constructor( private route: ActivatedRoute, private _SpotifyService:SpotifyService ){
    this.id = route.snapshot.params['id']
    console.log(this.id)
    this.artist = this._SpotifyService.getArtist(this.id).subscribe( artist => console.log(artist))
  }
}
