import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { SpotifyService} from "./serivces/spotify.service";

import { AppComponent } from "./rootapp/app.component";
import { routing } from "./rootapp/app.routes";

import { NavBarTopComponent } from "./components/navbartop/navbartop.component";
import { SearchComponent} from "./components/search/search.component";
import { AboutComponent } from "./components/about/about.component";
import { ArtistComponent } from "./components/artist/artist.component";
import { AlbumComponent } from "./components/album/album.component";

import { Album } from "./modal/album";
import { Artist } from "./modal/artist";


@NgModule({
  imports: [ BrowserModule, HttpModule, RouterModule,FormsModule, routing ],
  providers: [ SpotifyService ],
  declarations: [ AppComponent, NavBarTopComponent, AboutComponent, SearchComponent, ArtistComponent, AlbumComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
