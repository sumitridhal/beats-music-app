import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from "./services/auth.service";
import { LoginService } from "./services/login.service";
import { SpotifyLocalService } from "./services/spotify.service";
import { MusixmatchService } from "./services/musixmatch.service";
import { MusicgraphService } from "./services/musicgraph.service";
import { SidebarService } from "./components/sidebar/sidebar.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowseComponent } from './components/browse/browse.component';
import { RadioComponent } from './components/radio/radio.component';
import { SongsComponent } from './components/songs/songs.component';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { ControllerComponent } from './components/controller/controller.component';
// npm
import { SuiModule } from 'ng2-semantic-ui';
import { SongCardComponent } from './components/song-card/song-card.component';
import { NewReleasesPipe } from './pipe/new-releases.pipe';

export function spotifyAuthFactory(spotifyAuth: SpotifyLocalService): Function {
  return () => spotifyAuth.clientCredentials();
}

// export the firebase config
export const firebaseConfig = {
  apiKey: "AIzaSyBm0KvIzaZ7uyR1Vq_TH7CNvQigBmlYeO0",
  authDomain: "mychatapp-b8f70.firebaseapp.com",
  databaseURL: "https://mychatapp-b8f70.firebaseio.com",
  projectId: "mychatapp-b8f70",
  storageBucket: "",
  messagingSenderId: "25483501497"
};

const routes: Routes = [
  { path: '', redirectTo: 'browse', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'songs', component: BrowseComponent },
  { path: 'album', component: BrowseComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'playlist', component: PlaylistComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    BrowseComponent,
    RadioComponent,
    SongsComponent,
    AlbumComponent,
    ArtistComponent,
    PlaylistComponent,
    ControllerComponent,
    SongCardComponent,
    NewReleasesPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    FormsModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SuiModule
  ],
  providers: [
    AuthService,
    LoginService,
    SidebarService,
    SpotifyLocalService,
    MusixmatchService,
    MusicgraphService,
    {
      provide: APP_INITIALIZER,
      useFactory: spotifyAuthFactory,
      deps: [SpotifyLocalService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
