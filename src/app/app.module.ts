import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { AuthService } from "./services/auth.service";
import { LoginService } from "./services/login.service";
import { SidebarService } from "./components/sidebar/sidebar.service";

import { SuiModule } from 'ng2-semantic-ui';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowseComponent } from './components/browse/browse.component';
import { RadioComponent } from './components/radio/radio.component';
import { SongsComponent } from './components/songs/songs.component';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';
import { PlaylistComponent } from './components/playlist/playlist.component';

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
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'album', component: AlbumComponent },
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
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes , {useHash: true}),
    FormsModule,
    HttpModule,
    JsonpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SuiModule
  ],
  providers: [
    AuthService,
    LoginService,
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
