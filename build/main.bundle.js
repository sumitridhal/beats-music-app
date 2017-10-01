webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cover {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font: inherit;\r\n  font-size: 100%;\r\n  vertical-align: baseline;\r\n}\r\n\r\n.pusher {\r\n  /*padding-top: 78px;*/\r\n}\r\n\r\n.fixed+.pusher, .fixed~.pusher {\r\n  margin-top: 78px;\r\n}\r\n\r\n.ui.container {\r\n  width: 95%;\r\n  margin-left: auto!important;\r\n  margin-right: auto!important;\r\n}\r\n\r\n.ui.dimmer {\r\n  /*height: 950px;*/\r\n  /*margin-top: 52.63px;*/\r\n  /*margin-top: -9.37px;*/\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cover\"></div>\r\n<div class=\"ui dimmable\" >\r\n  <!-- sidebar -->\r\n  <div app-sidebar></div>\r\n  <!-- header -->\r\n  <app-header></app-header>\r\n  <!-- controller -->\r\n  <!-- <app-controller></app-controller> -->\r\n  <div class=\"pusher\">\r\n    <div class=\"full height\">\r\n      <div class=\"article\">\r\n        <div class=\"main ui container\">\r\n          <!-- grid:start -->\r\n          <div class=\"ui grid\">\r\n            <div class=\"sixteen wide column\">\r\n              <router-outlet></router-outlet>\r\n            </div>\r\n            <!-- <div class=\"sixteen wide column\" *ngIf=\"false\">\r\n            <app-chat></app-chat>\r\n          </div> -->\r\n            <!-- <div class=\"sixteen wide column\" *ngIf=\"false\">\r\n            <app-card></app-card>\r\n          </div> -->\r\n          </div>\r\n          <!-- grid:end -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui dimmer transition\" id=\"{{isVisible}}\" [ngClass]=\"{ 'visible active': isVisible == true, 'hidden': isVisible==false }\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sidebar_sidebar_service__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(sAuth, sBar) {
        var _this = this;
        this.sAuth = sAuth;
        this.sBar = sBar;
        this.isVisible = true;
        this.hideScroll = "hide-scroll";
        this.isAuth = false;
        this.bodeElem = document.getElementsByTagName('body')[0];
        this._subscription1 = this.sAuth.getAuth().subscribe(function (value) {
            _this.isAuth = value;
        });
        this._subscription2 = this.sBar.get().subscribe(function (value) {
            _this.isVisible = value;
            if (_this.isVisible) {
                _this.bodeElem.classList.add(_this.hideScroll);
            }
            else {
                _this.bodeElem.classList.remove(_this.hideScroll);
            }
        });
    }
    AppComponent.prototype.onClick = function (e) {
        var _this = this;
        setTimeout(function () {
            if (_this.isVisible) {
                _this.sBar.set(false);
            }
        }, 0);
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this._subscription1.unsubscribe();
        this._subscription2.unsubscribe();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onClick", null);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
            selector: '[app-root]',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__components_sidebar_sidebar_service__["a" /* SidebarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__components_sidebar_sidebar_service__["a" /* SidebarService */]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_spotify_service__ = __webpack_require__("../../../../../src/app/services/spotify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_musixmatch_service__ = __webpack_require__("../../../../../src/app/services/musixmatch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_musicgraph_service__ = __webpack_require__("../../../../../src/app/services/musicgraph.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_sidebar_sidebar_service__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_browse_browse_component__ = __webpack_require__("../../../../../src/app/components/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_radio_radio_component__ = __webpack_require__("../../../../../src/app/components/radio/radio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_songs_songs_component__ = __webpack_require__("../../../../../src/app/components/songs/songs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_album_album_component__ = __webpack_require__("../../../../../src/app/components/album/album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_artist_artist_component__ = __webpack_require__("../../../../../src/app/components/artist/artist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_playlist_playlist_component__ = __webpack_require__("../../../../../src/app/components/playlist/playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_controller_controller_component__ = __webpack_require__("../../../../../src/app/components/controller/controller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_semantic_ui__ = __webpack_require__("../../../../ng2-semantic-ui/dist/public.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipe_new_releases_pipe__ = __webpack_require__("../../../../../src/app/pipe/new-releases.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_cards_song_card_song_card_component__ = __webpack_require__("../../../../../src/app/components/cards/song-card/song-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_cards_playlist_card_playlist_card_component__ = __webpack_require__("../../../../../src/app/components/cards/playlist-card/playlist-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_cards_artist_card_artist_card_component__ = __webpack_require__("../../../../../src/app/components/cards/artist-card/artist-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_cards_genre_card_genre_card_component__ = __webpack_require__("../../../../../src/app/components/cards/genre-card/genre-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipe_millisecond_pipe__ = __webpack_require__("../../../../../src/app/pipe/millisecond.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_bio_bio_component__ = __webpack_require__("../../../../../src/app/components/bio/bio.component.ts");
/* unused harmony export spotifyAuthFactory */
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























// npm

//pipes

//cards






function spotifyAuthFactory(spotifyAuth) {
    return function () { return spotifyAuth.clientCredentials(); };
}
// export the firebase config
var firebaseConfig = {
    apiKey: "AIzaSyBm0KvIzaZ7uyR1Vq_TH7CNvQigBmlYeO0",
    authDomain: "mychatapp-b8f70.firebaseapp.com",
    databaseURL: "https://mychatapp-b8f70.firebaseio.com",
    projectId: "mychatapp-b8f70",
    storageBucket: "",
    messagingSenderId: "25483501497"
};
var routes = [
    { path: '', redirectTo: 'browse', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'browse', component: __WEBPACK_IMPORTED_MODULE_19__components_browse_browse_component__["a" /* BrowseComponent */] },
    { path: 'radio', component: __WEBPACK_IMPORTED_MODULE_20__components_radio_radio_component__["a" /* RadioComponent */] },
    { path: 'songs', component: __WEBPACK_IMPORTED_MODULE_19__components_browse_browse_component__["a" /* BrowseComponent */] },
    { path: 'album', component: __WEBPACK_IMPORTED_MODULE_19__components_browse_browse_component__["a" /* BrowseComponent */] },
    { path: 'artist/:id', component: __WEBPACK_IMPORTED_MODULE_23__components_artist_artist_component__["a" /* ArtistComponent */] },
    { path: 'bio/:id', component: __WEBPACK_IMPORTED_MODULE_33__components_bio_bio_component__["a" /* BioComponent */] },
    { path: 'playlist', component: __WEBPACK_IMPORTED_MODULE_24__components_playlist_playlist_component__["a" /* PlaylistComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_browse_browse_component__["a" /* BrowseComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_radio_radio_component__["a" /* RadioComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_songs_songs_component__["a" /* SongsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_album_album_component__["a" /* AlbumComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_artist_artist_component__["a" /* ArtistComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_playlist_playlist_component__["a" /* PlaylistComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_controller_controller_component__["a" /* ControllerComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pipe_new_releases_pipe__["a" /* NewReleasesPipe */],
                __WEBPACK_IMPORTED_MODULE_28__components_cards_song_card_song_card_component__["a" /* SongCardComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_cards_playlist_card_playlist_card_component__["a" /* PlaylistCardComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_cards_artist_card_artist_card_component__["a" /* ArtistCardComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_cards_genre_card_genre_card_component__["a" /* GenreCardComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pipe_millisecond_pipe__["a" /* MillisecondPipe */],
                __WEBPACK_IMPORTED_MODULE_33__components_bio_bio_component__["a" /* BioComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_26_ng2_semantic_ui__["a" /* SuiModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_14__components_sidebar_sidebar_service__["a" /* SidebarService */],
                __WEBPACK_IMPORTED_MODULE_11__services_spotify_service__["a" /* SpotifyLocalService */],
                __WEBPACK_IMPORTED_MODULE_12__services_musixmatch_service__["a" /* MusixmatchService */],
                __WEBPACK_IMPORTED_MODULE_13__services_musicgraph_service__["a" /* MusicgraphService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* APP_INITIALIZER */],
                    useFactory: spotifyAuthFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_11__services_spotify_service__["a" /* SpotifyLocalService */]],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/album/album.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/album/album.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  album works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/album/album.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlbumComponent = (function () {
    function AlbumComponent() {
    }
    AlbumComponent.prototype.ngOnInit = function () {
    };
    AlbumComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
            selector: 'app-album',
            template: __webpack_require__("../../../../../src/app/components/album/album.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/album/album.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlbumComponent);
    return AlbumComponent;
}());

//# sourceMappingURL=album.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/artist/artist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font: inherit;\r\n  font-size: 100%;\r\n  vertical-align: baseline;\r\n}\r\n\r\nheader.artist-header {\r\n  position: relative;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  background-size: contain;\r\n  background-position: 50%;\r\n  padding-left: 84px;\r\n  padding-top: 200px;\r\n  margin-top: -40px;\r\n  margin-left: -68px;\r\n  margin-right: -68px;\r\n}\r\n\r\nheader.artist-header:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  background: linear-gradient(transparent -30%, #181818);\r\n}\r\n\r\nheader.artist-header>* {\r\n  position: relative;\r\n}\r\n\r\nheader.artist-header h1.large {\r\n  font-size: 4.5em;\r\n  color: #fff;\r\n}\r\n\r\nheader.artist-header h1 {\r\n  font-weight: 700;\r\n  margin: 0 auto;\r\n  max-width: 70%;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n.header-buttons {\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.header-buttons .ui.button {\r\n  color: #fff;\r\n  cursor: pointer;\r\n  margin-top: 1em;\r\n  display: inline-block;\r\n  margin-bottom: 0;\r\n  font-size: .82em;\r\n  font-weight: 500;\r\n  text-align: center;\r\n  -ms-touch-action: manipulation;\r\n  touch-action: manipulation;\r\n  background-image: none;\r\n  border: 0;\r\n  border-radius: 500px;\r\n  padding: 13px;\r\n  transition: all .15s ease;\r\n  letter-spacing: 2px;\r\n  min-width: 130px;\r\n  white-space: normal;\r\n  will-change: transform;\r\n  text-transform: uppercase;\r\n  line-height: 1.6;\r\n  vertical-align: middle;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.button.green {\r\n  background-color: #2ebd59;\r\n  padding: 11px 44px 12px;\r\n}\r\n\r\n.button.green:focus, .button.green:hover {\r\n  background-color: #1ed760;\r\n}\r\n\r\n.button.black {\r\n  padding: 11px 44px 12px;\r\n  background: hsla(0, 0%, 9%, .7);\r\n  color: #fff;\r\n  transition: none 33ms cubic-bezier(.3, 0, .7, 1);\r\n  transition-property: box-shadow, color, background-color, -webkit-transform;\r\n  transition-property: transform, box-shadow, color, background-color;\r\n  transition-property: transform, box-shadow, color, background-color, -webkit-transform;\r\n  box-shadow: inset 0 0 0 2px #a0a0a0;\r\n}\r\n\r\n.button.black:hover {\r\n  box-shadow: inset 0 0 0 2px #fff, 0 0 0 1px transparent;\r\n}\r\n\r\n.header-buttons .ui.button:focus, .header-buttons .ui.button:hover {\r\n  -webkit-transform: scale(1.035);\r\n  transform: scale(1.035);\r\n}\r\n\r\n.ui.container {\r\n  width: 400px;\r\n  margin-left: auto!important;\r\n  margin-right: auto!important;\r\n}\r\n\r\n.ui.secondary.pointing.menu {\r\n  width: 100%;\r\n  padding: 20px 0;\r\n}\r\n\r\n.ui.secondary.pointing.menu a.item {\r\n  border: 0;\r\n  display: inline-block;\r\n  font-size: 13px;\r\n  font-weight: 700;\r\n  letter-spacing: .08em;\r\n  text-transform: uppercase;\r\n  color: hsla(0, 0%, 100%, .5);\r\n  margin: .8em;\r\n  padding: .8em .8em 0;\r\n  text-decoration: none;\r\n  transition: color .2s;\r\n}\r\n\r\n.ui.secondary.pointing.menu a.item:hover {\r\n  color: #fff;\r\n}\r\n\r\n.ui.secondary.pointing.menu .active.item {\r\n  color: #fff;\r\n}\r\n\r\n.ui.secondary.pointing.menu .active.item:after {\r\n  -webkit-transform: inherit;\r\n          transform: inherit;\r\n  border: none;\r\n  left: 0;\r\n  content: '';\r\n  height: 1.41px;\r\n  background-color: #1ed760;\r\n  width: 1.4em;\r\n  position: relative;\r\n  top: .1em;\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n/************************************************************************************************************************/\r\n\r\n.ui.table {\r\n  border: none;\r\n  /*background: #F2F3F5;*/\r\n  padding: 1em 2em 0.5em 2em;\r\n}\r\n\r\n.ui.celled.table tbody tr td {\r\n  border: none;\r\n}\r\n\r\n.ui.celled.table tbody tr:not(:last-child) td {\r\n  border-bottom: 1px solid rgba(34, 36, 38, .1);\r\n}\r\n\r\n.ui.table thead th {\r\n  padding: .6em .78571429em;\r\n}\r\n\r\n.ui.table tbody td {\r\n  padding: .3em .78571429em;\r\n  text-align: inherit;\r\n}\r\n\r\n.ui.table thead th span, .ui.box .head span {\r\n  margin: 0 20px 0 5px;\r\n}\r\n\r\n.ui.table thead th>.ui.buttons .button, .ui.table thead th>.button, .ui.box .head .button {\r\n  background: transparent;\r\n  font-weight: 300;\r\n  padding: .78571429em .5em .78571429em;\r\n  text-transform: uppercase;\r\n}\r\n\r\ni.icon.heart:not(.empty), i.icon.active, .ui.active.button, .ui.celled.table tbody tr>td:nth-child(2) {\r\n  color: #CB1C4E;\r\n}\r\n\r\n\r\n/************************************************************************************************************************/\r\n\r\n.ui.box {\r\n  border: none;\r\n  /*background: #F2F3F5;*/\r\n  padding: 1em 2em 0.5em 2em;\r\n  margin: 2rem 0rem;\r\n  border-radius: .28571429rem;\r\n}\r\n\r\n.ui.box .head {\r\n  box-shadow: none;\r\n  vertical-align: middle;\r\n  font-size: 1em;\r\n  padding: .6em 0 0 0;\r\n  cursor: auto;\r\n  text-align: inherit;\r\n  color: rgba(0, 0, 0, .87);\r\n  vertical-align: inherit;\r\n  font-weight: 700;\r\n  text-transform: none;\r\n  border-bottom: none;\r\n  border-left: none;\r\n}\r\n\r\n.ui.stackable.cards {\r\n  margin: 0;\r\n  margin-top: -2px;\r\n}\r\n\r\n.ui.cards>.card {\r\n  font-size: 1em;\r\n  border: none;\r\n  box-shadow: none;\r\n  background: transparent;\r\n}\r\n\r\n.ui.cards>.card>:only-child {\r\n  border-radius: 0rem !important;\r\n}\r\n\r\n.ui.cards>.card>.content {\r\n  padding: 0.3em 0.3em;\r\n}\r\n\r\n.ui.cards>.card>.image {\r\n  border-radius: 0!important;\r\n}\r\n\r\n.ui.cards>.card>.content>.header:not(.ui) {\r\n  font-weight: 400;\r\n  font-size: 0.95em;\r\n  margin-top: -0.21425em;\r\n  line-height: 1.28571429em;\r\n}\r\n\r\n.ui.cards>.card .meta {\r\n  font-size: 0.85em;\r\n  color: rgba(0, 0, 0, .4);\r\n}\r\n\r\n.ui.basic.massive.circular.icon.button {\r\n  height: 64px;\r\n  width: 64px;\r\n  border: 1px solid #a0a0a0;\r\n  background: none transparent;\r\n  outline: none;\r\n  transition: all .3s cubic-bezier(0,0,0,2.41);\r\n}\r\n\r\n.ui.basic.massive.circular.icon.button>.icon {\r\n  border-color: #fff;\r\n  color: #fff;\r\n  margin-top: -2px !important;\r\n  padding: 0px 5px;\r\n  -webkit-transform: scale(1.5);\r\n          transform: scale(1.5);\r\n}\r\n\r\n.ui.basic.massive.button:hover {\r\n  border-color: #fff !important;\r\n  background: none transparent !important;\r\n  -webkit-transform: scale(1.2);\r\n          transform: scale(1.2);\r\n}\r\n\r\n\r\n.ui.basic.massive.button:focus {\r\n  background: none transparent !important;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/artist/artist.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"artist-header\" [ngStyle]=\"{'background-image': 'url(' + headerImages + ')'}\">\r\n  <h1 class=\"large\">{{ name }}</h1>\r\n  <div class=\"header-buttons\">\r\n    <button class=\"big ui button green\">PLAY</button>\r\n    <button class=\"big ui button black\">FAVORITE</button>\r\n  </div>\r\n  <div class=\"ui center aligned container\">\r\n    <div class=\"ui secondary pointing menu\">\r\n      <a class=\"active item\">Overview</a>\r\n      <a class=\"item\">Related Artists</a>\r\n      <a class=\"item\" routerLink=\"/bio/{{artistId}}\">About</a>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<table class=\"ui very basic celled table\">\r\n  <thead>\r\n    <tr>\r\n      <th colspan=\"8\">\r\n        <span>SONGS</span>\r\n        <div class=\"ui buttons\">\r\n          <button class=\"ui button active\">New</button>\r\n          <button class=\"ui button\">Popular</button>\r\n          <button class=\"ui button\">Trend</button>\r\n        </div>\r\n        <div class=\"ui right floated small button active\">\r\n          View All\r\n        </div>\r\n        <div class=\"ui right floated small button active\">\r\n          More\r\n        </div>\r\n      </th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor='let t of topTracks; let i=index;'>\r\n      <td class=\"collapsing\">\r\n        <img class=\"ui mini spaced image\" src=\"{{ t.album.images[0].url }}\">\r\n      </td>\r\n      <td class=\"collapsing\">{{ i+1 }}</td>\r\n      <td class=\"collapsing\">\r\n        <i class=\"plus icon\"></i>\r\n      </td>\r\n      <td>{{ t.name }}</td>\r\n      <td>\r\n        <span>{{ t.album.name }}</span>\r\n      </td>\r\n      <td class=\"collapsing\">{{ t.duration_ms | millisecond }}</td>\r\n      <td class=\"collapsing\">\r\n        <i class=\"heart icon\" [ngClass]=\"{ 'empty': t.popularity < 85 }\"></i>\r\n      </td>\r\n      <td class=\"collapsing\">\r\n        <i class=\"ellipsis horizontal icon\"></i>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<div class=\"ui box\">\r\n  <div class=\"head\">\r\n    <span>ALBUM</span>\r\n    <div class=\"ui buttons\">\r\n      <button class=\"ui button active\">New</button>\r\n      <button class=\"ui button\">Popular</button>\r\n      <button class=\"ui button\">Trend</button>\r\n    </div>\r\n    <div class=\"ui right floated small button active\">\r\n      View All\r\n    </div>\r\n    <div class=\"ui right floated small button active\">\r\n      More\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui six stackable special cards\">\r\n    <app-song-card *ngFor='let a of albums; let i=index' [name]=\"a.name\" [meta]='a.artists[0].name' [img]='a.images[0].url'></app-song-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/artist/artist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_spotify_service__ = __webpack_require__("../../../../../src/app/services/spotify.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistComponent = (function () {
    function ArtistComponent(spotify, route) {
        this.route = route;
        this.img = '';
        this.name = '';
        this.headerImages = '';
        this.spotify = spotify;
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get parent ActivatedRoute of this route.
        this._subscription1 = this.route.params.subscribe(function (params) {
            _this.artistId = params['id'];
            console.log(params);
            _this.spotify.getLocalMeta(_this.artistId).subscribe(function (data) {
                _this.headerImages = null;
                if (data) {
                    _this.about = data.bio;
                    _this.headerImages = data.headerImages[0].url;
                }
                else {
                    _this.headerImages = _this.img;
                }
            });
            _this.spotify.getData('artists/' + _this.artistId).subscribe(function (data) {
                _this.img = data.images[0].url;
                _this.name = data.name;
                _this.artistMeta = data;
                if (!_this.headerImages) {
                    _this.headerImages = _this.img;
                }
            });
            _this.spotify.getData('artists/' + _this.artistId + '/top-tracks?country=US').subscribe(function (data) {
                _this.topTracks = null;
                _this.topTracks = data.tracks;
            });
            _this.spotify.getData('artists/' + _this.artistId + '/albums?country=US').subscribe(function (data) {
                _this.albums = null;
                _this.albums = data.items;
            });
        });
    };
    ArtistComponent.prototype.ngOnDestroy = function () {
        this._subscription1.unsubscribe();
    };
    ArtistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
            selector: 'app-artist',
            template: __webpack_require__("../../../../../src/app/components/artist/artist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/artist/artist.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_spotify_service__["a" /* SpotifyLocalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_spotify_service__["a" /* SpotifyLocalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object])
    ], ArtistComponent);
    return ArtistComponent;
    var _a, _b;
}());

//# sourceMappingURL=artist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/bio/bio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\r\n  background-color: rgba(0, 0, 0, .5) !important;\r\n}\r\n\r\n.ui.box {\r\n  height: 100vh;\r\n  border: none;\r\n  background-color: rgba(0, 0, 0, .6);\r\n  margin: 0rem -3rem;\r\n  border-radius: unset;\r\n  color: #fff;\r\n}\r\n\r\n.ui.box:before,.backgroung.img {\r\n  content: attr(data-img);\r\n  display: block;\r\n  height: 110vh;\r\n  width: 110vw;\r\n  opacity: .99;\r\n  position: absolute;\r\n  -webkit-filter: blur(15px) brightness(.5);\r\n  z-index: -1;\r\n}\r\n\r\n.ui.box:before,.backgroung.img {\r\n  background-image: attr(data-img);\r\n  /*background-image: url(https://i.scdn.co/image/a6b50b62941f169aea7a48039a509f643c8c69e3);*/\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  margin-left: -24px;\r\n}\r\n\r\n.ui.card>.content>.header, .ui.cards>.card>.content>.header {\r\n  color: #FFF;\r\n  font-size: 24px;\r\n  font-weight: 100;\r\n  font-weight: lighter;\r\n  line-height: normal;\r\n  outline: 0 none;\r\n  text-decoration: none;\r\n  text-rendering: optimizelegibility;\r\n}\r\n\r\n.ui.block.inner {\r\n  padding: 6em 18.5em 0em 18.5em;\r\n  line-height: 1em;\r\n  outline: 0 none;\r\n  text-decoration: none;\r\n  text-rendering: optimizelegibility;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.head.bold {\r\n  margin: 30px auto;\r\n  padding-bottom: 5px;\r\n  color: #fff;\r\n  border-bottom: 1px solid #222326;\r\n}\r\n\r\n.head.bold span {\r\n  font-size: 36px;\r\n  font-weight: 100;\r\n  font-weight: light;\r\n}\r\n\r\n.ui.three.cards>.card {\r\n  border: none;\r\n  border-radius: unset;\r\n  box-shadow: none;\r\n}\r\n\r\n.ui.card>.content, .ui.cards>.card>.content {\r\n  padding: 1em 0em;\r\n}\r\n\r\n.separator-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  width: 100%;\r\n  margin-top: 8px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.separator-line {\r\n  width: 25px;\r\n  height: 1px;\r\n  background-color: hsla(0, 0%, 100%, .6);\r\n  margin: 20px 0;\r\n}\r\n\r\n.separator-text {\r\n  color: hsla(0, 0%, 100%, .6)!important;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  font-size: 14px;\r\n  margin: 0 6px;\r\n  line-height: 22px!important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bio/bio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui box transparent\" [attr.data-img]=\"img\">\n  <div class=\"backgroung img\" [ngStyle]=\"{'background-image': 'url(' + img + ')'}\"></div>\n  <div class=\"ui block inner\">\n    <div class=\"head bold\">\n      <span>About Artist</span>\n    </div>\n    <div class=\"ui three stackable special cards\">\n      <div class=\"centered fluid card\" style=\"width: calc(33.33333333% + 0.8em);\">\n        <div class=\"blurring dimmable image cover-art actionable\">\n          <img src=\"{{img}}\" asyc>\n        </div>\n        <div class=\"content\">\n          <div class=\"header\">{{name}}</div>\n        </div>\n      </div>\n\n      <div class=\"centered fluid card\" style=\"padding: 0 20px; width: calc(33.33333333% + 15em);\">\n        <div class=\"content\">\n          <div class=\"separator-container\">\n            <!-- <div class=\"separator-line\"></div> -->\n            <div class=\"separator-text\">{{bio}}</div>\n            <!-- <div class=\"separator-line\"></div> -->\n          </div>\n          <div class=\"meta\">\n            <span></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/bio/bio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_spotify_service__ = __webpack_require__("../../../../../src/app/services/spotify.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BioComponent = (function () {
    function BioComponent(spotify, route) {
        var _this = this;
        this.route = route;
        // @ViewChild('target') target:ElementRef;
        this.img = '';
        this.name = '';
        this.spotify = spotify;
        this._subscription1 = this.route.params.subscribe(function (params) {
            _this.artistId = params['id'];
            console.log(params);
            _this.spotify.getData('artists/' + _this.artistId).subscribe(function (data) {
                _this.artistMeta = null;
                _this.artistMeta = data;
                _this.img = data.images[0].url;
                _this.name = data.name;
            });
            _this.spotify.getLocalMeta(_this.artistId).subscribe(function (data) {
                if (data) {
                    _this.bio = data.bio;
                }
            });
        });
    }
    BioComponent.prototype.ngOnInit = function () {
    };
    // ngAfterViewInit(): void {
    //   this.target.nativeElement.style.color = "blue";
    // }
    BioComponent.prototype.ngOnDestroy = function () {
        this._subscription1.unsubscribe();
    };
    BioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
            selector: 'app-bio',
            template: __webpack_require__("../../../../../src/app/components/bio/bio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bio/bio.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_spotify_service__["a" /* SpotifyLocalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_spotify_service__["a" /* SpotifyLocalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object])
    ], BioComponent);
    return BioComponent;
    var _a, _b;
}());

//# sourceMappingURL=bio.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/browse/browse.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[hidden] {\r\n  display: none !important;\r\n}\r\n\r\n\r\n/************************************************************************************************************************/\r\n\r\nheader {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font: inherit;\r\n  font-size: 100%;\r\n  vertical-align: baseline;\r\n}\r\n\r\nheader.artist-header {\r\n  position: relative;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  background-size: cover;\r\n  background-position: 50%;\r\n  padding-left: 0px;\r\n  padding-top: 140px;\r\n  padding-bottom: 22px;\r\n  margin-top: 0px;\r\n  margin-left: -68px;\r\n  margin-right: -68px;\r\n}\r\n\r\nheader.artist-header:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  background: linear-gradient(transparent -30%, rgba(208, 28, 181, 0.31));\r\n}\r\n\r\nheader.artist-header>* {\r\n  position: relative;\r\n}\r\n\r\nheader.artist-header h1.large {\r\n  font-size: 4.5em;\r\n  color: #fff;\r\n}\r\n\r\nheader.artist-header h1 {\r\n  font-weight: 700;\r\n  margin: 0 auto;\r\n  max-width: 70%;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n.header-buttons {\r\n  text-align: center;\r\n  /*margin-bottom: 30px;\r\n  margin-left: -800px;*/\r\n}\r\n\r\n.header-buttons .ui.button {\r\n  color: #fff;\r\n  cursor: pointer;\r\n  margin-top: 1em;\r\n  display: inline-block;\r\n  margin-bottom: 0;\r\n  font-size: .82em;\r\n  font-weight: 500;\r\n  text-align: center;\r\n  -ms-touch-action: manipulation;\r\n  touch-action: manipulation;\r\n  background-image: none;\r\n  border: 0;\r\n  border-radius: 500px;\r\n  padding: 13px;\r\n  transition: all .15s ease;\r\n  letter-spacing: 2px;\r\n  min-width: 130px;\r\n  white-space: normal;\r\n  will-change: transform;\r\n  text-transform: uppercase;\r\n  line-height: 1.6;\r\n  vertical-align: middle;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.button.green {\r\n  background-color: #2ebd59;\r\n  padding: 11px 44px 12px;\r\n}\r\n\r\n.button.green:focus, .button.green:hover {\r\n  background-color: #1ed760;\r\n}\r\n\r\n.button.black {\r\n  padding: 11px 44px 12px;\r\n  background: hsla(0, 0%, 9%, .7);\r\n  color: #fff;\r\n  transition: none 33ms cubic-bezier(.3, 0, .7, 1);\r\n  transition-property: box-shadow, color, background-color, -webkit-transform;\r\n  transition-property: transform, box-shadow, color, background-color;\r\n  transition-property: transform, box-shadow, color, background-color, -webkit-transform;\r\n  box-shadow: inset 0 0 0 2px #a0a0a0;\r\n}\r\n\r\n.button.black:hover {\r\n  box-shadow: inset 0 0 0 2px #fff, 0 0 0 1px transparent;\r\n}\r\n\r\n.header-buttons .ui.button:focus, .header-buttons .ui.button:hover {\r\n  -webkit-transform: scale(1.035);\r\n  transform: scale(1.035);\r\n}\r\n\r\n.ui.container {\r\n  width: 400px;\r\n  margin-left: auto!important;\r\n  margin-right: auto!important;\r\n}\r\n\r\n.ui.secondary.pointing.menu {\r\n  width: 100%;\r\n  padding: 20px 0;\r\n  border-bottom: none;\r\n}\r\n\r\n.ui.secondary.pointing.menu a.item {\r\n  border: 0;\r\n  display: inline-block;\r\n  font-size: 13px;\r\n  font-weight: 700;\r\n  letter-spacing: .08em;\r\n  text-transform: uppercase;\r\n  color: hsla(0, 0%, 100%, .5);\r\n  margin: .8em;\r\n  padding: .8em .8em 0;\r\n  text-decoration: none;\r\n  transition: color .2s;\r\n}\r\n\r\n.ui.secondary.pointing.menu a.item:hover {\r\n  color: #fff;\r\n}\r\n\r\n.ui.secondary.pointing.menu .active.item {\r\n  color: #fff;\r\n}\r\n\r\n.ui.secondary.pointing.menu .active.item:after {\r\n  -webkit-transform: inherit;\r\n          transform: inherit;\r\n  border: none;\r\n  left: 0;\r\n  content: '';\r\n  height: 1.41px;\r\n  background-color: #1ed760;\r\n  width: 1.4em;\r\n  position: relative;\r\n  top: .1em;\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n/************************************************************************************************************************/\r\n\r\n.ui.table {\r\n  border: none;\r\n  background: #F2F3F5;\r\n  padding: 1em 2em 0.5em 2em;\r\n}\r\n\r\n.ui.box.transparent>.ui.table {\r\n  background: none transparent;\r\n  padding: 0 !important;\r\n}\r\n\r\n.ui.celled.table tbody tr td {\r\n  border: none;\r\n  height: 47px;\r\n}\r\n\r\n.ui.celled.table tbody tr:not(:last-child) td {\r\n  border-bottom: 1px solid rgba(34, 36, 38, .1);\r\n}\r\n\r\n.ui.table thead th {\r\n  padding: .6em .78571429em;\r\n}\r\n\r\n.ui.table tbody td {\r\n  padding: .3em .78571429em;\r\n  text-align: inherit;\r\n}\r\n\r\n.ui.table tbody tr td:nth-child(1) {\r\n  padding: .1em .6em;\r\n}\r\n\r\n.ui.table tbody tr td:nth-child(1) >.ui.mini.image {\r\n  width: 40px;\r\n}\r\n\r\n.ui.table tbody td>i.icon:hover {\r\n  color: #CB1C4E;\r\n}\r\n\r\n.ui.table tbody td>i.plus.icon:hover::before {\r\n  content: \"\\F00C\";\r\n}\r\n\r\n.ui.table thead th span, .ui.box .head span {\r\n  margin: 0 20px 0 5px;\r\n}\r\n\r\n.ui.table thead th>.ui.buttons .button, .ui.table thead th>.button, .ui.box .head .button {\r\n  background: transparent;\r\n  font-weight: 300;\r\n  padding: .78571429em .5em .78571429em;\r\n  text-transform: uppercase;\r\n}\r\n\r\ni.icon.active, .ui.active.button, .ui.celled.table tbody tr>td:nth-child(2) {\r\n  color: #CB1C4E;\r\n}\r\n\r\n.ui.box.transparent>.ui.table tfoot th {\r\n  padding-top: 8px;\r\n}\r\n\r\n.ui.box.transparent>.ui.table tfoot th .ui.float.center.menu {\r\n  left: -40%;\r\n  box-shadow: none;\r\n  border: none;\r\n}\r\n\r\n.ui.box.transparent>.ui.table tfoot th .ui.float.center.menu .item {\r\n  background: transparent;\r\n  font-weight: 300;\r\n  font-size: smaller;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.ui.box.transparent>.ui.table tfoot th .ui.float.center.menu .item .icon {\r\n  padding-left: 12px;\r\n}\r\n\r\n\r\n/************************************************************************************************************************/\r\n\r\n.ui.box {\r\n  border: none;\r\n  background: #F2F3F5;\r\n  padding: 1em 2em 0.5em 2em;\r\n  margin: 2rem 0rem;\r\n  border-radius: .28571429rem;\r\n}\r\n\r\n.ui.box.transparent {\r\n  background: none transparent;\r\n}\r\n\r\n.ui.box.transparent.song-list {\r\n  padding: 0.5em;\r\n}\r\n\r\n.ui.box .head {\r\n  box-shadow: none;\r\n  vertical-align: middle;\r\n  font-size: 1em;\r\n  padding: .6em 0 0 0;\r\n  cursor: auto;\r\n  text-align: inherit;\r\n  color: rgba(0, 0, 0, .87);\r\n  vertical-align: inherit;\r\n  font-weight: 700;\r\n  text-transform: none;\r\n  border-bottom: none;\r\n  border-left: none;\r\n}\r\n\r\n.ui.box.transparent .head span {\r\n  font-size: 1.5em;\r\n  font-weight: 300;\r\n  padding-left: 5px;\r\n}\r\n\r\n.ui.box.transparent .head.bold span {\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n  padding-left: 5px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.ui.box.transparent .head .button.last {\r\n  padding-right: 15px;\r\n}\r\n\r\n.ui.stackable.cards {\r\n  margin: 0;\r\n  margin-top: -2px;\r\n}\r\n\r\n.ui.cards>.card {\r\n  font-size: 1em;\r\n  border: none;\r\n  box-shadow: none;\r\n  background: transparent;\r\n}\r\n\r\n.ui.cards>.card>:only-child {\r\n  border-radius: 0rem !important;\r\n}\r\n\r\n.ui.cards>.card>.content {\r\n  padding: 0.3em 0.3em;\r\n}\r\n\r\n.ui.cards>.card>.image {\r\n  border-radius: 0!important;\r\n}\r\n\r\n.ui.cards>.card>.content>.header:not(.ui) {\r\n  font-weight: 400;\r\n  font-size: 0.95em;\r\n  margin-top: -0.21425em;\r\n  line-height: 1.28571429em;\r\n}\r\n\r\n.ui.cards>.card .meta {\r\n  font-size: 0.85em;\r\n  color: rgba(0, 0, 0, .4);\r\n}\r\n\r\n.ui.basic.massive.circular.icon.button {\r\n  height: 64px;\r\n  width: 64px;\r\n  border: 1px solid #a0a0a0;\r\n  background: none transparent;\r\n  outline: none;\r\n  transition: all .3s cubic-bezier(0, 0, 0, 2.41);\r\n}\r\n\r\n.ui.basic.massive.circular.icon.button>.icon {\r\n  border-color: #fff;\r\n  color: #fff;\r\n  margin-top: -2px !important;\r\n  padding: 0px 5px;\r\n  -webkit-transform: scale(1.5);\r\n          transform: scale(1.5);\r\n}\r\n\r\n.ui.basic.massive.button:hover {\r\n  border-color: #fff !important;\r\n  background: none transparent !important;\r\n  -webkit-transform: scale(1.2);\r\n          transform: scale(1.2);\r\n}\r\n\r\n.ui.basic.massive.button:focus {\r\n  background: none transparent !important;\r\n}\r\n\r\n\r\n/************************************************************************************************************************/\r\n\r\n.float.center {\r\n  float: right;\r\n  position: relative;\r\n  left: -50%;\r\n  /* or right 50% */\r\n  text-align: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<header [hidden]=\"aURL != '/browse'\" class=\"artist-header\" style=\"background-image: url('http://d1i3xayf43lpeg.cloudfront.net/58l7lmmaka1i/2jqTg1i70ce8G6yUyIi624/77fcf976d461fd96715da306b0afec34/cover.jpg');\">\r\n  <h1 class=\"large\">What is Hot now? <br> Weekend Groove Playlist</h1>\r\n  <div class=\"header-buttons\">\r\n    <button class=\"big ui button green\">PLAY ALL</button>\r\n  </div>\r\n  <div class=\"ui center aligned container\">\r\n    <div class=\"ui secondary pointing menu\">\r\n      <a class=\"active item\">Featured</a>\r\n      <a class=\"item\">Genres & Moods</a>\r\n      <a class=\"item\">Discover</a>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<div class=\"ui box transparent\">\r\n  <div class=\"head bold\">\r\n    <span>{{ aURL=='/browse'?'New Albums and Singles':'New '+aURL.replace('/','') }}</span>\r\n    <!-- <span>{{ aURL=='/browse'?'New Albums and Singles':'New'+aURL.replace('/')}}</span> -->\r\n    <div class=\"ui buttons\" [hidden]=\"aURL != '/browse'\">\r\n      <button class=\"ui button active\">New</button>\r\n      <button class=\"ui button\">Popular</button>\r\n      <button class=\"ui button\">Trend</button>\r\n    </div>\r\n    <div class=\"ui icon right floated small button last active\" [hidden]=\"aURL != '/browse'\">\r\n      <i class=\"angle right icon\"></i>\r\n    </div>\r\n    <div class=\"ui icon right floated small button active\" [hidden]=\"aURL != '/browse'\">\r\n      <i class=\"angle left icon\"></i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui six stackable special cards\">\r\n    <app-song-card *ngFor='let s of newReleases | newReleases:aURL | slice:0:(aURL == \"/browse\")?6:48 ; let i=index' [name]=\"s.name\" [meta]='s.artists[0].name' [img]='s.images[0].url'></app-song-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui box transparent\" [hidden]=\"aURL != '/browse'\">\r\n  <div class=\"head\" style=\"margin-bottom: 18px;\">\r\n    <span>Popular Artist You May Also Like</span>\r\n\r\n    <div class=\"ui right floated small button last active\">\r\n      Show All\r\n    </div>\r\n    <div class=\"ui icon right floated small button active\">\r\n      <i class=\"angle right icon\"></i>\r\n    </div>\r\n    <div class=\"ui icon right floated small button active\">\r\n      <i class=\"angle left icon\"></i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui six stackable link special cards popular-artist\">\r\n    <app-artist-card *ngFor='let a of artistList | slice:0:6 ; let i=index' [artist]='a' [id]=\"a.name\"></app-artist-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui box transparent\" [hidden]=\"aURL != '/browse'\">\r\n  <div class=\"head\" style=\"margin-bottom: 18px;\">\r\n    <span>Spotify Playlists</span>\r\n\r\n    <div class=\"ui right floated small button last active\">\r\n      Show All\r\n    </div>\r\n    <div class=\"ui icon right floated small button active\">\r\n      <i class=\"angle right icon\"></i>\r\n    </div>\r\n    <div class=\"ui icon right floated small button active\">\r\n      <i class=\"angle left icon\"></i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui six stackable special cards playlist\">\r\n    <app-playlist-card *ngFor='let p of spotifyPlaylist | newReleases:aURL | slice:0:6 ; let i=index' [playlist]='p' [id]=\"p.name\"></app-playlist-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui stackable two column grid\" [hidden]=\"aURL != '/browse'\">\r\n  <div class=\"column\">\r\n    <div class=\"ui box transparent song-list\">\r\n      <div class=\"head\" style=\"margin-bottom: 18px;\">\r\n        <span>Most Popular This Week</span>\r\n      </div>\r\n      <table class=\"ui very basic celled table\">\r\n        <tbody>\r\n          <tr *ngFor='let song of newReleases | slice:6:11; let i=index;'>\r\n            <td class=\"collapsing\">\r\n              <img class=\"ui mini spaced image\" src=\"{{ song.images[0].url }}\">\r\n            </td>\r\n            <td class=\"collapsing\">{{i+1}}</td>\r\n            <td class=\"collapsing\">\r\n              <i class=\"plus icon\"></i>\r\n            </td>\r\n            <td>{{ song.name }}</td>\r\n            <td>\r\n              <span>{{ song.artists[0].name }}</span>\r\n            </td>\r\n            <td class=\"collapsing\">\r\n              <i class=\"heart icon\"></i>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <th colspan=\"8\">\r\n              <div class=\"ui float center floated menu\">\r\n                <a class=\"browse item\">\r\n                  SHOW MORE\r\n                  <i class=\"angle down icon\"></i>\r\n                </a>\r\n              </div>\r\n            </th>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"column\">\r\n    <div class=\"ui box transparent song-list\">\r\n      <div class=\"head\" style=\"margin-bottom: 18px;\">\r\n        <span>Most Recommended</span>\r\n      </div>\r\n      <table class=\"ui very basic celled table\">\r\n        <tbody>\r\n          <tr *ngFor='let song of newReleases | slice:11:16; let i=index'>\r\n            <td class=\"collapsing\">\r\n              <img class=\"ui mini spaced image\" src=\"{{ song.images[0].url }}\">\r\n            </td>\r\n            <td class=\"collapsing\">{{i+1}}</td>\r\n            <td class=\"collapsing\">\r\n              <i class=\"plus icon\"></i>\r\n            </td>\r\n            <td>{{ song.name }}</td>\r\n            <td>\r\n              <span>{{ song.artists[0].name }}</span>\r\n            </td>\r\n            <td class=\"collapsing\">\r\n              <i class=\"heart icon\"></i>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <th colspan=\"8\">\r\n              <div class=\"ui float center floated menu\">\r\n                <a class=\"browse item\">\r\n                  SHOW MORE\r\n                  <i class=\"angle down icon\"></i>\r\n                </a>\r\n              </div>\r\n            </th>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_spotify_service__ = __webpack_require__("../../../../../src/app/services/spotify.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrowseComponent = (function () {
    function BrowseComponent(spotify, router) {
        var _this = this;
        this.router = router;
        this.spotify = spotify;
        this._subscription1 = router.events.subscribe(function (route) { return _this.aURL = route.url; });
    }
    BrowseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spotify.getNewReleases()
            .subscribe(function (data) {
            _this.newReleases = data;
        });
        this.spotify.getArtistList()
            .subscribe(function (data) {
            _this.artistList = data;
        });
        this.spotify.getSpotifyPlaylist()
            .subscribe(function (data) {
            _this.spotifyPlaylist = data;
        });
    };
    BrowseComponent.prototype.ngOnDestroy = function () {
        this._subscription1.unsubscribe();
    };
    BrowseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
            selector: 'app-browse',
            template: __webpack_require__("../../../../../src/app/components/browse/browse.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/browse/browse.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_spotify_service__["a" /* SpotifyLocalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_spotify_service__["a" /* SpotifyLocalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], BrowseComponent);
    return BrowseComponent;
    var _a, _b;
}());

//# sourceMappingURL=browse.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cards/artist-card/artist-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  font-size: 1em;\r\n  border: none !important;\r\n  box-shadow: none !important;\r\n  background: transparent;\r\n}\r\n\r\n.card>.content.top {\r\n  margin-bottom: -30px;\r\n  z-index: 1;\r\n}\r\n\r\n.ui.cards>.card>.content {\r\n  padding: 0.3em 0.3em;\r\n}\r\n\r\n.card>.content.top .icon.active, .card>.content.top .icon:hover, .card>.content.top .icon:focus {\r\n  color: #CB1C4E;\r\n  opacity: 1;\r\n}\r\n\r\n.card>.image {\r\n  border-radius: 500rem !important;\r\n}\r\n\r\n.card>.image:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  /*background: linear-gradient(transparent -30%, rgba(31, 31, 31, 0.76));*/\r\n}\r\n\r\n.card>.image:not(.ui)>img, .ui.cards>.card>.image:not(.ui)>img {\r\n  border: none;\r\n}\r\n\r\n.card>.content.bottom {\r\n  border: none;\r\n  text-align: center;\r\n  margin-top: -10px;\r\n  z-index: 1;\r\n}\r\n\r\n.card>.content.bottom .header {\r\n  /*color: #fff;*/\r\n}\r\n\r\n.card>.content>.header:not(.ui) {\r\n  font-weight: 400;\r\n  font-size: 0.95em;\r\n  margin-top: -0.21425em;\r\n  line-height: 1.28571429em;\r\n}\r\n\r\n.card>.content.bottom .meta {\r\n  /*color: rgba(255, 255, 255, 0.8);*/\r\n  font-size: 0.75em;\r\n  line-height: 1em;\r\n  text-transform: capitalize;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cards/artist-card/artist-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"centered fluid card\" routerLink=\"/artist/{{artist.id}}\">\n  <div class=\"content top\">\n    <i class=\"right floated star icon\" [ngClass]=\"{'active': artist.popularity > 85 }\"></i>\n  </div>\n  <div class=\"circular image\">\n    <img src=\"{{ artist.images[0].url }}\">\n  </div>\n  <div class=\"content bottom\">\n    <div class=\"header\">{{ artist.name }}</div>\n    <div class=\"meta\">\n      <span class=\"date\"> {{ artist.genres[0] }}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/cards/artist-card/artist-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArtistCardComponent = (function () {
    function ArtistCardComponent(el) {
        this.el = el;
        this.class = 'inactive';
    }
    ArtistCardComponent.prototype.changeStyle = function ($event) {
        this.class = $event.type == 'mouseover' ? 'active' : 'inactive';
    };
    //filtrclassical/digster.co.uk
    ArtistCardComponent.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        parentElement.removeChild(nativeElement);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", Object)
    ], ArtistCardComponent.prototype, "artist", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], ArtistCardComponent.prototype, "id", void 0);
    ArtistCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
            selector: 'app-artist-card',
            template: __webpack_require__("../../../../../src/app/components/cards/artist-card/artist-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cards/artist-card/artist-card.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object])
    ], ArtistCardComponent);
    return ArtistCardComponent;
    var _a;
}());

//# sourceMappingURL=artist-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cards/genre-card/genre-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  font-size: 1em;\r\n  border: none;\r\n  box-shadow: none !important;\r\n  background: transparent;\r\n}\r\n\r\n.card>:only-child {\r\n  border-radius: 0rem !important;\r\n}\r\n\r\n.card>.content {\r\n  padding: 0.3em 0.3em;\r\n}\r\n\r\n.image {\r\n  border: none;\r\n  border-radius: 0 !important;\r\n}\r\n\r\n.content>.header:not(.ui) {\r\n  font-weight: 400 !important;\r\n  font-size: 0.95em !important;\r\n  text-align: center;\r\n  margin-top: -0.01em !important;\r\n  line-height: 1.28571429em !important;\r\n  cursor: pointer;\r\n}\r\n\r\n.card>.content.top {\r\n  margin-bottom: -30px;\r\n  z-index: 1;\r\n}\r\n\r\n.card>.content.bottom {\r\n  border: none;\r\n  text-align: center;\r\n  margin-top: -40px;\r\n  z-index: 1;\r\n}\r\n\r\n.card>.content.bottom .header {\r\n  color: #fff;\r\n}\r\n\r\n.card>.content.top .icon {\r\n  color: #fff;\r\n  opacity: 1;\r\n}\r\n\r\n.card>.content.top .icon.active, .card>.content.top .icon:hover, .card>.content.top .icon:focus {\r\n  color: #CB1C4E;\r\n  opacity: 1;\r\n}\r\n\r\n.card>.image:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  background: linear-gradient(transparent -30%, rgba(31, 31, 31, 0.76));\r\n}\r\n\r\n.ui.basic.massive.circular.icon.button {\r\n  height: 64px;\r\n  width: 64px;\r\n  border: 1px solid #a0a0a0;\r\n  background: none transparent;\r\n  outline: none;\r\n  transition: all .3s cubic-bezier(0, 0, 0, 2.41);\r\n}\r\n\r\n.ui.basic.massive.circular.icon.button>.icon {\r\n  border-color: #fff;\r\n  color: #fff;\r\n  margin-top: -2px !important;\r\n  padding: 0px 5px;\r\n  -webkit-transform: scale(1.5);\r\n          transform: scale(1.5);\r\n}\r\n\r\n.ui.basic.massive.button:hover {\r\n  border-color: #fff !important;\r\n  background: none transparent !important;\r\n  -webkit-transform: scale(1.2);\r\n          transform: scale(1.2);\r\n}\r\n\r\n.ui.basic.massive.button:focus {\r\n  background: none transparent !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cards/genre-card/genre-card.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"blurring dimmable image\" (mouseover)=\"changeStyle($event)\" (mouseout)=\"changeStyle($event)\">\n    <div class=\"ui dimmer transition visible\" [ngClass]=\"class\">\n      <div class=\"content\">\n        <div class=\"center\">\n          <button class=\"ui basic circular massive icon button\"><i class=\"play icon\"></i></button>\n        </div>\n      </div>\n    </div>\n    <img src=\"{{ image }}\">\n  </div>\n  <div class=\"content\">\n    <div class=\"header\">{{ name }}</div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/cards/genre-card/genre-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenreCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GenreCardComponent = (function () {
    function GenreCardComponent() {
        this.class = 'inactive';
    }
    GenreCardComponent.prototype.changeStyle = function ($event) {
        this.class = $event.type == 'mouseover' ? 'active' : 'inactive';
    };
    GenreCardComponent.prototype.ngOnInit = function () {
        // var nativeElement: HTMLElement = this.el.nativeElement,
        //   parentElement: HTMLElement = nativeElement.parentElement;
        // while (nativeElement.firstChild) {
        //   parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        // }
        // parentElement.removeChild(nativeElement);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], GenreCardComponent.prototype, "name", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], GenreCardComponent.prototype, "image", void 0);
    GenreCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
            selector: '[app-genre-card]',
            template: __webpack_require__("../../../../../src/app/components/cards/genre-card/genre-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cards/genre-card/genre-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GenreCardComponent);
    return GenreCardComponent;
}());

//# sourceMappingURL=genre-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cards/playlist-card/playlist-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.card {\r\n  font-size: 1em;\r\n  border: none;\r\n  box-shadow: none !important;\r\n  background: transparent;\r\n}\r\n\r\n.card>:only-child {\r\n  border-radius: 0rem !important;\r\n}\r\n\r\n.card>.content {\r\n  padding: 0.3em 0.3em;\r\n}\r\n\r\n.card>.image {\r\n  border-radius: 0!important;\r\n}\r\n\r\n.card>.content>.header:not(.ui) {\r\n  font-weight: 400;\r\n  font-size: 0.95em;\r\n  text-align: center;\r\n  margin-top: -0.01em;\r\n  line-height: 1.28571429em;\r\n  cursor: pointer;\r\n}\r\n\r\n.card>.content.top {\r\n  margin-bottom: -30px;\r\n  z-index: 1;\r\n}\r\n\r\n.card>.content.bottom {\r\n  border: none;\r\n  text-align: center;\r\n  margin-top: -40px;\r\n  z-index: 1;\r\n}\r\n\r\n.card>.content.bottom .header {\r\n  color: #fff;\r\n}\r\n\r\n.card>.content.top .icon {\r\n  color: #fff;\r\n  opacity: 1;\r\n}\r\n\r\n.card>.content.top .icon.active, .card>.content.top .icon:hover, .card>.content.top .icon:focus {\r\n  color: #CB1C4E;\r\n  opacity: 1;\r\n}\r\n\r\n.card>.image:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  background: linear-gradient(transparent -30%, rgba(31, 31, 31, 0.76));\r\n}\r\n\r\n.ui.basic.massive.circular.icon.button {\r\n  height: 64px;\r\n  width: 64px;\r\n  border: 1px solid #a0a0a0;\r\n  background: none transparent;\r\n  outline: none;\r\n  transition: all .3s cubic-bezier(0, 0, 0, 2.41);\r\n}\r\n\r\n.ui.basic.massive.circular.icon.button>.icon {\r\n  border-color: #fff;\r\n  color: #fff;\r\n  margin-top: -2px !important;\r\n  padding: 0px 5px;\r\n  -webkit-transform: scale(1.5);\r\n          transform: scale(1.5);\r\n}\r\n\r\n.ui.basic.massive.button:hover {\r\n  border-color: #fff !important;\r\n  background: none transparent !important;\r\n  -webkit-transform: scale(1.2);\r\n          transform: scale(1.2);\r\n}\r\n\r\n.ui.basic.massive.button:focus {\r\n  background: none transparent !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cards/playlist-card/playlist-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"centered fluid card\">\n  <div class=\"blurring dimmable image\" (mouseover)=\"changeStyle($event)\" (mouseout)=\"changeStyle($event)\">\n    <div class=\"ui dimmer transition visible\" [ngClass]=\"class\">\n      <div class=\"content\">\n        <div class=\"center\">\n          <button class=\"ui basic circular massive icon button\"><i class=\"play icon\"></i></button>\n        </div>\n      </div>\n    </div>\n    <img src=\"{{ playlist.images[0].url }}\">\n  </div>\n  <div class=\"content\">\n    <div class=\"header\">{{ playlist.name }}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/cards/playlist-card/playlist-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlaylistCardComponent = (function () {
    function PlaylistCardComponent(el) {
        this.el = el;
        this.class = 'inactive';
    }
    PlaylistCardComponent.prototype.changeStyle = function ($event) {
        this.class = $event.type == 'mouseover' ? 'active' : 'inactive';
    };
    //filtrclassical/digster.co.uk
    PlaylistCardComponent.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        parentElement.removeChild(nativeElement);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", Object)
    ], PlaylistCardComponent.prototype, "playlist", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], PlaylistCardComponent.prototype, "id", void 0);
    PlaylistCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
            selector: 'app-playlist-card',
            template: __webpack_require__("../../../../../src/app/components/cards/playlist-card/playlist-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cards/playlist-card/playlist-card.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object])
    ], PlaylistCardComponent);
    return PlaylistCardComponent;
    var _a;
}());

//# sourceMappingURL=playlist-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cards/song-card/song-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.card {\r\n  font-size: 1em;\r\n  border: none;\r\n  box-shadow: none !important;\r\n  background: transparent;\r\n}\r\n\r\n.card>:only-child {\r\n  border-radius: 0rem !important;\r\n}\r\n\r\n.image.cover-art.actionable {\r\n    transition: all .1s ease;\r\n    cursor: pointer;\r\n}\r\n\r\n.image.cover-art.actionable:active {\r\n    -webkit-transform: scale3d(.93,.93,1);\r\n            transform: scale3d(.93,.93,1);\r\n    box-shadow: none;\r\n}\r\n\r\n.card>.content {\r\n  padding: 0.3em 0.3em;\r\n}\r\n\r\n.card>.image {\r\n  border-radius: 0!important;\r\n}\r\n\r\n.card>.content>.header:not(.ui) {\r\n  font-weight: 400;\r\n  font-size: 0.95em;\r\n  margin-top: -0.21425em;\r\n  line-height: 1.28571429em;\r\n}\r\n\r\n.card>.content.top {\r\n  margin-bottom: -30px;\r\n  z-index: 1;\r\n}\r\n\r\n.card>.content.bottom {\r\n  border: none;\r\n  text-align: center;\r\n  margin-top: -40px;\r\n  z-index: 1;\r\n}\r\n\r\n.card>.content.bottom .header {\r\n  color: #fff;\r\n}\r\n\r\n.card>.content.bottom .meta {\r\n  color: rgba(255, 255, 255, 0.8);\r\n  font-size: 0.75em;\r\n  line-height: 1em;\r\n}\r\n\r\n.card>.content.top .icon {\r\n  color: #fff;\r\n  opacity: 1;\r\n}\r\n\r\n.card>.content.top .icon.active, .card>.content.top .icon:hover, .card>.content.top .icon:focus {\r\n  color: #CB1C4E;\r\n  opacity: 1;\r\n}\r\n\r\n.card>.image:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  background: linear-gradient(transparent -30%, rgba(31, 31, 31, 0.76));\r\n}\r\n\r\n.card .meta {\r\n  font-size: 0.85em;\r\n  color: rgba(0, 0, 0, .4);\r\n}\r\n\r\n.ui.basic.massive.circular.icon.button {\r\n  height: 64px;\r\n  width: 64px;\r\n  border: 1px solid #a0a0a0;\r\n  background: none transparent;\r\n  outline: none;\r\n  transition: all .3s cubic-bezier(0, 0, 0, 2.41);\r\n}\r\n\r\n.ui.basic.massive.circular.icon.button>.icon {\r\n  border-color: #fff;\r\n  color: #fff;\r\n  margin-top: -2px !important;\r\n  padding: 0px 5px;\r\n  -webkit-transform: scale(1.5);\r\n          transform: scale(1.5);\r\n}\r\n\r\n.ui.basic.massive.button:hover {\r\n  border-color: #fff !important;\r\n  background: none transparent !important;\r\n  -webkit-transform: scale(1.2);\r\n          transform: scale(1.2);\r\n}\r\n\r\n.ui.basic.massive.button:focus {\r\n  background: none transparent !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cards/song-card/song-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"centered fluid card\" (mouseover)=\"changeStyle($event)\" (mouseout)=\"changeStyle($event)\">\n  <div class=\"blurring dimmable image cover-art actionable\" [ngClass]=\"dim\">\n    <div class=\"ui dimmer transition\" [ngClass]=\"trans\">\n      <div class=\"content\">\n        <div class=\"center\">\n          <button class=\"ui basic circular massive icon button\"><i class=\"play icon\"></i></button>\n        </div>\n      </div>\n    </div>\n    <img src=\"{{ img }}\">\n  </div>\n  <div class=\"content\">\n    <div class=\"header\">{{ name }}</div>\n    <div class=\"meta\">\n      <span class=\"date\">{{ meta }}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/cards/song-card/song-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SongCardComponent = (function () {
    function SongCardComponent(el) {
        this.el = el;
        //trans: string = 'animating fade in inactive';
        this.trans = 'inactive';
        this.dim = '';
    }
    SongCardComponent.prototype.changeStyle = function ($event) {
        this.trans = $event.type == 'mouseover' ? 'visible active' : 'inactive';
        //this.dim = $event.type == 'mouseover' ? 'dimmed' : '';
    };
    SongCardComponent.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        parentElement.removeChild(nativeElement);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], SongCardComponent.prototype, "name", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], SongCardComponent.prototype, "meta", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], SongCardComponent.prototype, "img", void 0);
    SongCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
            selector: 'app-song-card',
            template: __webpack_require__("../../../../../src/app/components/cards/song-card/song-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cards/song-card/song-card.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object])
    ], SongCardComponent);
    return SongCardComponent;
    var _a;
}());

//# sourceMappingURL=song-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/controller/controller.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.text.menu {\r\n  background: #FFFFFF;\r\n  box-shadow: 3px 3px 16px 0 rgba(0, 0, 0, 0.12);\r\n  height: 140px;\r\n}\r\n\r\n.ui.menu .item.cover.art {\r\n  font-size: 4rem;\r\n  padding: 0;\r\n}\r\n\r\n.ui.text.menu .item {\r\n  -ms-flex-item-align: start;\r\n      align-self: flex-start;\r\n}\r\n\r\n.info .content {\r\n  margin: 1em;\r\n}\r\n\r\n.info .content>.description {\r\n  margin: 0.2em 0;\r\n}\r\n\r\n.info .content>.meta {\r\n  margin: 0.5em 0;\r\n}\r\n\r\n.controls .content>.description {\r\n  margin: 0 30.5vw 0 20.5vw\r\n}\r\n\r\n.controls .content>.extra.progress {\r\n  margin: 2em 0;\r\n}\r\n\r\n.menu .ui.buttons>.ui.button, .ui.table .ui.icon.button {\r\n  background: transparent;\r\n}\r\n\r\n.controls .ui.buttons>.ui.button.circular {\r\n  border-radius: 10em;\r\n  border: 1px solid rgba(34, 36, 38, .15);\r\n}\r\n\r\n.controls .ui.buttons>.ui.button.play>.icon {\r\n  font-size: x-large;\r\n}\r\n\r\n.controls .ui.buttons>.ui.button.circular>.icon.play {\r\n  padding-left: 6px;\r\n}\r\n\r\n.ui.menu:not(.vertical) .right.menu.extra-ctrl {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  position: relative;\r\n  right: 150px;\r\n}\r\n\r\n.ui.tiny.progress .bar {\r\n  min-width: 0em;\r\n}\r\n\r\n.nonzero:hover {\r\n  fill: #474747;\r\n}\r\n\r\n.ui.top.left.popup {\r\n  top: auto;\r\n  bottom: 78px;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n\r\n[hidden] {\r\n  display: none !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/controller/controller.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui text bottom fixed massive menu\">\r\n  <div class=\"item cover art\">\r\n    <img [src]=\"currentPlaying.image\" >\r\n  </div>\r\n  <div class=\"item info\">\r\n    <div class=\"content\">\r\n      <div class=\"header\">\r\n        <h2>{{ currentPlaying.title }}</h2></div>\r\n      <div class=\"description\">{{ currentPlaying.artist }}</div>\r\n      <div class=\"meta\">{{ currentPostion }} / {{ currentDuration }}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"item controls center aligned\" >\r\n    <div class=\"content\">\r\n      <div class=\"description\">\r\n        <div class=\"ui icon buttons\">\r\n          <button class=\"ui big button\">\r\n            <i class=\"backward icon\"></i>\r\n          </button>\r\n          <button class=\"ui big button play\"  [ngClass]=\"'active'\" >\r\n            <i class=\"play icon\"></i>\r\n          </button>\r\n          <button class=\"ui big button\" >\r\n            <i class=\"forward icon\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"extra progress\">\r\n        <div class=\"ui tiny progress\">\r\n          <div class=\"bar\" style=\"transition-duration: 500ms;\" ng-style=\"{width : ( progress + '%' ) }\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"right menu extra-ctrl\" >\r\n    <div class=\"item\">\r\n      <div class=\"ui icon buttons\">\r\n        <button class=\"ui button\" [ngClass]=\"'active'\">\r\n          <i class=\"repeat icon\"></i>\r\n        </button>\r\n        <button class=\"ui button\" [ngClass]=\"'active'\">\r\n          <i class=\"shuffle icon\"></i>\r\n        </button>\r\n        <button class=\"ui button\" [ngClass]=\"'active'\">\r\n          <i class=\"like icon\"></i>\r\n        </button>\r\n        <button class=\"ui button\" [ngClass]=\"'active'\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n            <g fill=\"none\" fill-rule=\"evenodd\">\r\n              <g fill=\"#888888\" class=\"nonzero\" fill-rule=\"nonzero\">\r\n                <path class=\"playbackSoundBadge__queueIcon\" d=\"M6 11h12v2H6zM6 7h8v2H6zM6 15h12v2H6zM16 3v6l4-3z\"></path>\r\n              </g>\r\n            </g>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/controller/controller.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControllerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ControllerComponent = (function () {
    function ControllerComponent() {
        this.currentPostion = '0:00';
        this.currentDuration = '4:30';
        this.isPlaying = true;
        this.progress = 40;
        this.currentPlaying = {
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Maroon_5_-_Overexposed.png/220px-Maroon_5_-_Overexposed.png',
            title: 'Maps',
            artist: 'Maroon 5'
        };
    }
    ControllerComponent.prototype.ngOnInit = function () {
    };
    ControllerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
            selector: 'app-controller',
            template: __webpack_require__("../../../../../src/app/components/controller/controller.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/controller/controller.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ControllerComponent);
    return ControllerComponent;
}());

//# sourceMappingURL=controller.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.menu {\r\n    margin-top: 0rem;\r\n    border: none;\r\n    background: none transparent;\r\n}\r\n\r\n.main.ui.container > .form > .fields > .field {\r\n  margin: 20px\r\n}\r\n\r\n.ui.text.menu .item>img:not(.ui){\r\n  width: 3.5em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui text fixed top menu\">\r\n  <a class=\"item\" (click)=\"sbToggle($event)\">\r\n    <img src=\"assets/img/Beats-Music-Logo-2.png\">\r\n  </a>\r\n  <!-- <a class=\"item\" routerLink=\"/home\" [ngClass]=\"{ 'active selected': aURL == '/home' }\">Home</a>\r\n  <a class=\"item\" routerLink=\"/chat\" [ngClass]=\"{ 'active selected': aURL == '/chat' }\">Chatroom</a>\r\n  <a class=\"item\" routerLink=\"/user\" [ngClass]=\"{ 'active selected': aURL == '/user' }\">Users</a> -->\r\n  <div class=\"right menu\" style=\"display: none;\">\r\n    <a class=\"item\" *ngIf=\"isAuth && !custom\" (click)=\"logout()\">Logout</a>\r\n    <div class=\"ui item dropdown\" suiDropdown *ngIf=\"custom\">\r\n      <div class=\"text\">\r\n        <img class=\"ui avatar image\" src=\"{{user.selected.img}}\"> {{user.selected.name}}\r\n      </div>\r\n      <i class=\"dropdown icon\"></i>\r\n      <div class=\"menu\" suiDropdownMenu>\r\n        <!-- <a class=\"right item\" *ngIf=\"isAuth\" (click)=\"logout()\">Logout</a> -->\r\n        <div class=\"item\" *ngFor=\"let item of user.options\" (click)=\"changeUser(item)\" [ngClass]=\"{ 'active selected': user.selected.name == item.name }\">\r\n          <img class=\"ui avatar image\" src=\"{{item.img}}\"> {{item.name}}\r\n        </div>\r\n        <a class=\"item\" *ngIf=\"isAuth\" (click)=\"cLogout()\">Logout</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui dropdown item\" suiDropdown *ngIf=\"!isAuth && !custom\">\r\n      Login\r\n      <i class=\"dropdown icon\"></i>\r\n      <div class=\"menu\" suiDropdownMenu>\r\n        <div class=\"item\" (click)=\"customLogin('Custom User')\">Custom</div>\r\n        <div class=\"item\" (click)=\"login('Anonymous')\">Anonymous</div>\r\n        <div class=\"item\" (click)=\"login('Facebook')\">Facebook</div>\r\n        <div class=\"item\" (click)=\"login('Google')\">Google</div>\r\n        <!-- <div class=\"item\" (click)=\"login('User')\">User</div> -->\r\n        <div class=\"item\" (click)=\"open('User')\">User</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template let-context let-modal=\"modal\" #modalTemplate>\r\n  <div class=\"header\">User Login</div>\r\n  <!-- <div class=\"content\">\r\n    <p>{{ context.data }}</p>\r\n  </div> -->\r\n  <div class=\"main ui container\">\r\n    <form class=\"ui form\">\r\n      <div class=\"fields\">\r\n        <div class=\"ten wide field\">\r\n          <label>Email Address</label>\r\n          <input type=\"email\" [(ngModel)]=\"mEmail\" name=\"email\" placeholder=\"Email Address\" email>\r\n        </div>\r\n        <div class=\"ten wide field\">\r\n          <label>Password</label>\r\n          <input type=\"password\" [(ngModel)]=\"mPass\" name=\"password\" placeholder=\"Password\">\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"actions\">\r\n    <button class=\"ui red button\" (click)=\"modal.deny('denied')\">Cancel</button>\r\n    <button class=\"ui green button\" (click)=\"modal.approve({email: mEmail, password: mPass})\" autofocus>OK</button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_service__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_semantic_ui__ = __webpack_require__("../../../../ng2-semantic-ui/dist/public.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderComponent = (function () {
    function HeaderComponent(el, router, sAuth, sLogin, modalService, sBar) {
        var _this = this;
        this.el = el;
        this.router = router;
        this.sAuth = sAuth;
        this.sLogin = sLogin;
        this.modalService = modalService;
        this.sBar = sBar;
        this.custom = false;
        this.sidebarVisible = false;
        this.userSelectSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]({ name: '', img: '' });
        this.isAuth = false;
        this.user = {
            options: [
                { name: 'Jenny Hess', img: 'assets/img/avatar/small/jenny.jpg' },
                { name: 'Elliot Fu', img: 'assets/img/avatar/small/elliot.jpg' },
                { name: 'Stevie Feliciano', img: 'assets/img/avatar/small/stevie.jpg' },
                { name: 'Christian', img: 'assets/img/avatar/small/christian.jpg' },
                { name: 'Matt', img: 'assets/img/avatar/small/matt.jpg' },
                { name: 'Justen Kitsune', img: 'assets/img/avatar/small/justen.jpg' }
            ]
        };
        this._subscription1 = this.sAuth.getAuth().subscribe(function (value) { return _this.isAuth = value; });
        this._subscription2 = this.sAuth.getCustom().subscribe(function (value) { return _this.custom = value; });
        this._subscription3 = this.userSelectSubject.subscribe(function (newUser) {
            _this.user.selected = newUser;
            if (_this.custom) {
                _this.sAuth.setAuth({
                    displayName: _this.user.selected.name,
                    email: '',
                    isAnonymous: false,
                    phoneNumber: '',
                    photoURL: _this.user.selected.img,
                    uid: 'header.constructor.user.BehaviorSubject.subscribe'
                });
            }
        });
        this._subscription4 = router.events.subscribe(function (route) { return _this.aURL = route.url; });
        this._subscription5 = this.sBar.get().subscribe(function (value) {
            _this.sidebarVisible = value;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        parentElement.removeChild(nativeElement);
    };
    HeaderComponent.prototype.login = function (name) {
        this.sLogin[name + 'Login']();
    };
    HeaderComponent.prototype.logout = function () {
        this.sLogin.logout();
    };
    HeaderComponent.prototype.cLogout = function () {
        this.sAuth.setCustom(false);
        this.sAuth.setAuth(null);
    };
    HeaderComponent.prototype.customLogin = function (user) {
        this.sAuth.setCustom(true);
        this.userSelectSubject.next({ name: 'Jenny Hess', img: 'assets/img/avatar/small/jenny.jpg' });
    };
    HeaderComponent.prototype.changeUser = function (item) {
        this.userSelectSubject.next(item);
    };
    HeaderComponent.prototype.getUser = function () {
        return this.user.selected;
    };
    HeaderComponent.prototype.open = function (dynamicContent) {
        var _this = this;
        setTimeout(function () {
            var config = new __WEBPACK_IMPORTED_MODULE_6_ng2_semantic_ui__["b" /* TemplateModalConfig */](_this.modalTemplate);
            config.closeResult = "closed!";
            config.context = { data: dynamicContent };
            _this.modalService
                .open(config)
                .onApprove(function (result) {
                _this.sLogin.UserLogin(result);
            })
                .onDeny(function (result) { });
        }, 0);
    };
    HeaderComponent.prototype.sbToggle = function (event) {
        event.stopPropagation();
        this.sBar.set(!this.sidebarVisible);
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this._subscription1.unsubscribe();
        this._subscription2.unsubscribe();
        this._subscription3.unsubscribe();
        this._subscription4.unsubscribe();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('modalTemplate'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_semantic_ui__["c" /* ModalTemplate */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_semantic_ui__["c" /* ModalTemplate */]) === "function" && _a || Object)
    ], HeaderComponent.prototype, "modalTemplate", void 0);
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_semantic_ui__["d" /* SuiModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_semantic_ui__["d" /* SuiModalService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_service__["a" /* SidebarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_service__["a" /* SidebarService */]) === "function" && _g || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  padding: 0em;\r\n  height: 55vh;\r\n  width: auto !important;\r\n  max-width: 960px !important;\r\n  position: relative;\r\n  margin-left: auto !important;\r\n  margin-right: auto !important;\r\n  min-height: 430px;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.introduction {\r\n  position: relative;\r\n  clear: both;\r\n  display: block;\r\n}\r\n\r\n.ui.header {\r\n    line-height: 0.8em;\r\n}\r\n\r\nh1 {\r\n  font-weight: normal;\r\n  font-size: 3em;\r\n  color: rgba(255, 255, 255, 1);\r\n  line-height: 1.2;\r\n  margin: 0px 0px 0px;\r\n  padding-bottom: 0px;\r\n  -webkit-perspective: 500px;\r\n          perspective: 500px;\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\nh1>.library {\r\n  display: block;\r\n  font-size: 2.25em;\r\n  line-height: 1.5em;\r\n  font-weight: bold;\r\n}\r\n\r\nh1 .tagline {\r\n  font-size: 0.75em;\r\n  font-weight: 100;\r\n  color: rgb(29, 29, 29);\r\n  width: 40px;\r\n}\r\n\r\n.info {\r\n  margin-top: 15px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  font-size: 0.75em;\r\n  font-weight: 100;\r\n  color: rgba(29, 29, 29, 0.51);\r\n}\r\n\r\n.ui.button {\r\n      margin: 22px 1px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\r\n  <div class=\"introduction\">\r\n    <h1 class=\"ui header\">\r\n        <span class=\"library\">\r\n          Beats Music App\r\n        </span>\r\n        <span class=\"tagline\">\r\n          Contributing to Application.\r\n        </span>\r\n        <span class=\"info\">\r\n          Use your best judgment, and feel free to propose changes to this document in a pull request.\r\n        </span>\r\n\r\n        <button class=\"ui basic button\" href=\"https://github.com/sumitridhal/beats-music-app\">\r\n          <i class=\"github icon\"></i>\r\n          Github Repo\r\n        </button>\r\n      </h1>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.ui.box {\r\n  border: none;\r\n  background: #F2F3F5;\r\n  padding: 1em 2em 0.5em 2em;\r\n  margin: 2rem 0rem;\r\n  border-radius: .28571429rem;\r\n}\r\n\r\n.ui.box.transparent {\r\n  background: none transparent;\r\n}\r\n\r\n.ui.box.transparent.song-list {\r\n  padding: 0.5em;\r\n}\r\n\r\n.ui.box .head {\r\n  box-shadow: none;\r\n  vertical-align: middle;\r\n  font-size: 1em;\r\n  padding: .6em 0 0 0;\r\n  cursor: auto;\r\n  text-align: inherit;\r\n  color: rgba(0, 0, 0, .87);\r\n  vertical-align: inherit;\r\n  font-weight: 700;\r\n  text-transform: none;\r\n  border-bottom: none;\r\n  border-left: none;\r\n  margin-bottom: 18px;\r\n}\r\n\r\n.ui.box.transparent .head span {\r\n  font-size: 1.5em;\r\n  font-weight: 300;\r\n  padding-left: 5px;\r\n}\r\n\r\n.ui.box.transparent .head.bold span {\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n  padding-left: 5px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.ui.box.transparent .head .button.last {\r\n  padding-right: 15px;\r\n}\r\n\r\n.ui.box .head .button {\r\n  background: transparent;\r\n  font-weight: 300;\r\n  padding: .78571429em .5em .78571429em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n\r\n.ui.stackable.cards {\r\n  margin: 0;\r\n  margin-top: -2px;\r\n}\r\n\r\n.ui.cards>.card {\r\n  font-size: 1em;\r\n  border: none;\r\n  box-shadow: none;\r\n  background: transparent;\r\n}\r\n\r\n.ui.cards>.card>:only-child {\r\n  border-radius: 0rem !important;\r\n}\r\n\r\n.ui.cards>.card>.content {\r\n  padding: 0.3em 0.3em;\r\n}\r\n\r\n.ui.cards>.card>.image {\r\n  border-radius: 0!important;\r\n}\r\n\r\n.ui.cards>.card>.content>.header:not(.ui) {\r\n  font-weight: 400;\r\n  font-size: 0.95em;\r\n  margin-top: -0.21425em;\r\n  line-height: 1.28571429em;\r\n}\r\n\r\n.ui.cards>.card .meta {\r\n  font-size: 0.85em;\r\n  color: rgba(0, 0, 0, .4);\r\n}\r\n\r\n/*******************************************************************************/\r\n\r\n.card {\r\n  font-size: 1em;\r\n  border: none;\r\n  box-shadow: none !important;\r\n  background: transparent;\r\n}\r\n\r\n.card>:only-child {\r\n  border-radius: 0rem !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngFor='let p of myPlaylist'>\r\n  <p>{{p.name}}</p>\r\n  <img src=\"{{ p.images[0].url }}\">\r\n  <div *ngFor='let t of p.tracks.items'>\r\n    <p>{{t.track.name}}</p>\r\n    <p>{{t.track.album.artists[0].name}}</p>\r\n    <p>{{t.track.album.images[0].url}}</p>\r\n    <img src=\"{{ t.track.album.images[0].url }}\">\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"ui box transparent\">\r\n  <div class=\"head\">\r\n    <span>My Playlists</span>\r\n\r\n    <div class=\"ui right floated small button last active\">\r\n      Show All\r\n    </div>\r\n    <div class=\"ui icon right floated small button active\">\r\n      <i class=\"angle right icon\"></i>\r\n    </div>\r\n    <div class=\"ui icon right floated small button active\">\r\n      <i class=\"angle left icon\"></i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui six stackable special cards playlist\">\r\n    <div class=\"centered fluid card\" app-genre-card *ngFor='let p of myPlaylist | slice:0:6 ; let i=index' [image]='p.images[0].url' [name]=\"p.name\"></div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui box transparent\">\r\n  <div class=\"head\">\r\n    <span>Digster Playlists</span>\r\n\r\n    <div class=\"ui right floated small button last active\">\r\n      Show All\r\n    </div>\r\n    <div class=\"ui icon right floated small button active\">\r\n      <i class=\"angle right icon\"></i>\r\n    </div>\r\n    <div class=\"ui icon right floated small button active\">\r\n      <i class=\"angle left icon\"></i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui six stackable special cards playlist\">\r\n    <div class=\"centered fluid card\" app-genre-card *ngFor='let p of playlist02 | slice:0:6 ; let i=index' [image]='p.images[0].url' [name]=\"p.name\"></div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui box transparent\">\r\n  <div class=\"head\">\r\n    <span>Spotify Playlists</span>\r\n\r\n    <div class=\"ui right floated small button last active\">\r\n      Show All\r\n    </div>\r\n    <div class=\"ui icon right floated small button active\">\r\n      <i class=\"angle right icon\"></i>\r\n    </div>\r\n    <div class=\"ui icon right floated small button active\">\r\n      <i class=\"angle left icon\"></i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui six stackable special cards playlist\">\r\n    <div class=\"centered fluid card\" app-genre-card *ngFor='let p of spotifyP | slice:0:6; let i=index' [image]='p.images[0].url' [name]=\"p.name\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui box transparent\">\r\n  <div class=\"head\">\r\n    <span>Starbucks Playlists</span>\r\n\r\n    <div class=\"ui right floated small button last active\">\r\n      Show All\r\n    </div>\r\n    <div class=\"ui icon right floated small button active\">\r\n      <i class=\"angle right icon\"></i>\r\n    </div>\r\n    <div class=\"ui icon right floated small button active\">\r\n      <i class=\"angle left icon\"></i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui six stackable special cards playlist\">\r\n    <div class=\"centered fluid card\" app-genre-card *ngFor='let p of playlist03 | slice:0:6; let i=index' [image]='p.images[0].url' [name]=\"p.name\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui box transparent\">\r\n  <div class=\"head\">\r\n    <span>Filtr Playlists</span>\r\n\r\n    <div class=\"ui right floated small button last active\">\r\n      Show All\r\n    </div>\r\n    <div class=\"ui icon right floated small button active\">\r\n      <i class=\"angle right icon\"></i>\r\n    </div>\r\n    <div class=\"ui icon right floated small button active\">\r\n      <i class=\"angle left icon\"></i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui six stackable special cards playlist\">\r\n    <div class=\"centered fluid card\" app-genre-card *ngFor='let p of playlist04 | slice:0:6; let i=index' [image]='p.images[0].url' [name]=\"p.name\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui box transparent\">\r\n  <div class=\"head\">\r\n    <span>Filtr Canada Playlists</span>\r\n\r\n    <div class=\"ui right floated small button last active\">\r\n      Show All\r\n    </div>\r\n    <div class=\"ui icon right floated small button active\">\r\n      <i class=\"angle right icon\"></i>\r\n    </div>\r\n    <div class=\"ui icon right floated small button active\">\r\n      <i class=\"angle left icon\"></i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui six stackable special cards playlist\">\r\n    <div class=\"centered fluid card\" app-genre-card *ngFor='let p of playlist05 | slice:0:6; let i=index' [image]='p.images[0].url' [name]=\"p.name\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__ = __webpack_require__("../../../../../src/app/services/spotify.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaylistComponent = (function () {
    function PlaylistComponent(spotify) {
        this.spotify = spotify;
    }
    PlaylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spotify.getMyPlaylists()
            .subscribe(function (data) {
            _this.myPlaylist = data.items;
        });
        this.spotify.getPlaylist02()
            .subscribe(function (data) {
            _this.playlist02 = data.items;
        });
        this.spotify.getPlaylist03()
            .subscribe(function (data) {
            _this.playlist03 = data.items;
        });
        this.spotify.getPlaylist04()
            .subscribe(function (data) {
            _this.playlist04 = data.items;
        });
        this.spotify.getPlaylist05()
            .subscribe(function (data) {
            _this.playlist05 = data.items;
        });
        this.spotify.getSpotifyPlaylist()
            .subscribe(function (data) {
            _this.spotifyP = data;
        });
    };
    PlaylistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
            selector: 'app-playlist',
            template: __webpack_require__("../../../../../src/app/components/playlist/playlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/playlist/playlist.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyLocalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyLocalService */]) === "function" && _a || Object])
    ], PlaylistComponent);
    return PlaylistComponent;
    var _a;
}());

//# sourceMappingURL=playlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/radio/radio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/radio/radio.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  radio works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/radio/radio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RadioComponent = (function () {
    function RadioComponent() {
    }
    RadioComponent.prototype.ngOnInit = function () {
    };
    RadioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
            selector: 'app-radio',
            template: __webpack_require__("../../../../../src/app/components/radio/radio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/radio/radio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RadioComponent);
    return RadioComponent;
}());

//# sourceMappingURL=radio.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.left.visible.sidebar {\r\n  z-index: 1001;\r\n}\r\n\r\n.ui.left.sidebar {\r\n  width: 200px;\r\n}\r\n\r\n.ui.left.sidebar {\r\n  transition: all .5s ease, all .5s ease;\r\n}\r\n\r\n.ui.menu .item, .ui.vertical.menu .menu .item {\r\n  padding: .75em 1.33333333em;\r\n  color: #a8a9ad;\r\n  font-size: 16px;;\r\n  /*background: -webkit-linear-gradient(#8C278B, #E31837);\r\n-webkit-background-clip: text;\r\n-webkit-text-fill-color: transparent;*/\r\n}\r\n\r\n.ui.vertical.menu>.item:first-child{\r\n  padding: .1em 1.33333333em;\r\n}\r\n\r\n.ui.vertical.menu .active.item {\r\n  background: rgba(0, 0, 0, .05);\r\n  -webkit-text-fill-color: #CB1C4E;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n  /*color: #ED3125;*/\r\n}\r\n\r\n.ui.divider {\r\n  margin: 0.5rem 1.5em;\r\n}\r\n\r\n.ui.vertical.menu .item>i.icon {\r\n  width: 1.18em;\r\n  float: left;\r\n  margin: 0 1.2em 0 0.5em;\r\n}\r\n\r\n.ui.vertical.menu .item:before {\r\n  height: 0px;\r\n}\r\n\r\n.ui.vertical.menu .item>i.icon {\r\n  font-size: 17.7966px;\r\n  height: 17.7813px;\r\n  line-height: 17.7966px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui left transition vertical sidebar menu\" (click)=\"$event.stopPropagation()\" [ngClass]=\"{ 'uncover visible': isVisible == true }\">\r\n  <div class=\"item\">\r\n    <a class=\"ui logo icon image\" routerLink=\"/home\" routerLinkActive=\"active\">\r\n    <img src=\"assets/img/beats.png\">\r\n  </a>\r\n  </div>\r\n  <div class=\"ui divider\"></div>\r\n\r\n  <a class=\"item\" routerLink=\"/browse\" routerLinkActive=\"active\" [ngClass]=\"{ 'active selected': aURL == '/browse' }\">\r\n    <i class=\"compass icon\"></i>\r\n    Browse\r\n  </a>\r\n  <a class=\"item\" routerLink=\"/radio\" routerLinkActive=\"active\" [ngClass]=\"{ 'active selected': aURL == '/radio' }\">\r\n    <i class=\"sound icon\"></i>\r\n    Radio\r\n  </a>\r\n\r\n  <div class=\"item\">\r\n    <div class=\"header\">YOUR MUSIC</div>\r\n    <div class=\"menu\">\r\n\r\n      <a class=\"item\" routerLink=\"/songs\" routerLinkActive=\"active\" [ngClass]=\"{ 'active selected': aURL == '/songs' }\">\r\n      <i class=\"music icon\"></i>\r\n      Songs\r\n    </a>\r\n      <a class=\"item\" routerLink=\"/album\" routerLinkActive=\"active\" [ngClass]=\"{ 'active selected': aURL == '/album' }\">\r\n      <i class=\"circle icon\"></i>\r\n      Albums\r\n    </a>\r\n      <a class=\"item\" routerLink=\"/artist\" routerLinkActive=\"active\" [ngClass]=\"{ 'active selected': aURL == '/artist' }\" style=\"display: none;\">\r\n      <i class=\"star icon\"></i>\r\n      Artists\r\n    </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"item\">\r\n    <div class=\"header\">PLAYLIST</div>\r\n    <div class=\"menu\">\r\n      <a class=\"item\" routerLink=\"/playlist\" routerLinkActive=\"active\" [ngClass]=\"{ 'active selected': aURL == '/playlist' }\">\r\n      <i class=\"heart icon\"></i>\r\n      Playlist\r\n    </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_service__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidebarComponent = (function () {
    function SidebarComponent(router, sBar, el) {
        var _this = this;
        this.router = router;
        this.sBar = sBar;
        this.el = el;
        this.isVisible = false;
        this._subscription1 = this.sBar.get().subscribe(function (value) {
            _this.isVisible = value;
        });
        this._subscription2 = this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (event) {
            _this.aURL = _this.router.url;
            _this.sBar.set(false);
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    // public toggle(): void {
    //   console.log(this.isVisible)
    //   let visible = !this.isVisible;
    //   this.sBar.set(true)
    // }
    SidebarComponent.prototype.ngOnDestroy = function () {
        this._subscription1.unsubscribe();
        this._subscription2.unsubscribe();
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
            selector: '[app-sidebar]',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__sidebar_service__["a" /* SidebarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidebar_service__["a" /* SidebarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _c || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarService = (function () {
    function SidebarService() {
        this.isVisible = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    SidebarService.prototype.get = function () {
        return this.isVisible.asObservable();
    };
    SidebarService.prototype.set = function (val) {
        this.isVisible.next(val);
    };
    SidebarService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SidebarService);
    return SidebarService;
}());

//# sourceMappingURL=sidebar.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/songs/songs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/songs/songs.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  songs works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/songs/songs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SongsComponent = (function () {
    function SongsComponent() {
    }
    SongsComponent.prototype.ngOnInit = function () {
    };
    SongsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
            selector: 'app-songs',
            template: __webpack_require__("../../../../../src/app/components/songs/songs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/songs/songs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SongsComponent);
    return SongsComponent;
}());

//# sourceMappingURL=songs.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/millisecond.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MillisecondPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MillisecondPipe = (function () {
    function MillisecondPipe() {
    }
    MillisecondPipe.prototype.transform = function (ms, args) {
        var seconds = ms / 1000;
        var hours = Math.floor(seconds / 3600); // 3,600 seconds in 1 hour
        seconds = seconds % 3600; // seconds remaining after extracting hours
        var minutes = Math.floor(seconds / 60); // 60 seconds in 1 minute
        seconds = Math.floor(seconds % 60);
        if (hours > 0)
            return hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();
        else if (minutes > 0)
            return minutes.toString() + ":" + seconds.toString();
        else if (seconds > 0)
            return "00:" + seconds.toString();
    };
    MillisecondPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
            name: 'millisecond'
        })
    ], MillisecondPipe);
    return MillisecondPipe;
}());

//# sourceMappingURL=millisecond.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/new-releases.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewReleasesPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NewReleasesPipe = (function () {
    function NewReleasesPipe() {
    }
    NewReleasesPipe.prototype.transform = function (value, args) {
        if (value) {
            if (args == '/songs') {
                return value.filter(function (x) { return x.album_type == 'single'; });
            }
            else if (args == '/album') {
                return value.filter(function (x) { return x.album_type == 'album'; });
            }
            else {
                return value;
            }
        }
        else {
            return null;
        }
    };
    NewReleasesPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
            name: 'newReleases'
        })
    ], NewReleasesPipe);
    return NewReleasesPipe;
}());

//# sourceMappingURL=new-releases.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthService = (function () {
    function AuthService() {
        this.isAuth = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.isCustom = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.user = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({ displayName: '', photoURL: '', isAnonymous: false, email: '', phoneNumber: '', uid: '' });
    }
    AuthService.prototype.setAuth = function (data) {
        console.log('setAuth ', data);
        //this.isAuth.next(false);
        if (data) {
            if (data.displayName == '' || data.displayName == null && data.isAnonymous) {
                var objA = {
                    displayName: 'Anonymous',
                    photoURL: 'assets/img/avatar/small/anonymous.png',
                    isAnonymous: true,
                    email: '',
                    phoneNumber: '',
                    uid: data.uid
                };
                this.user.next(objA);
                this.isAuth.next(true);
            }
            else {
                var objU = {
                    displayName: data.displayName,
                    photoURL: data.photoURL,
                    isAnonymous: false,
                    email: data.email,
                    phoneNumber: data.phoneNumber,
                    uid: data.uid
                };
                this.user.next(objU);
                this.isAuth.next(true);
            }
        }
        else {
            this.isAuth.next(false);
        }
    };
    AuthService.prototype.getAuth = function () {
        return this.isAuth.asObservable();
    };
    AuthService.prototype.getCustom = function () {
        return this.isCustom.asObservable();
    };
    AuthService.prototype.setCustom = function (val) {
        this.isCustom.next(val);
    };
    AuthService.prototype.getUser = function () {
        return this.user.asObservable();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(afAuth, sAuth) {
        this.afAuth = afAuth;
        this.sAuth = sAuth;
        this.user = afAuth.authState;
        // this.afAuth.authState.subscribe(auth => {
        //   this.sAuth.setAuth(auth);  //Also for Logout State
        //   this.name = '';
        //   if (auth) {
        //     this.name = auth;
        //   }
        // })
    }
    LoginService.prototype.FacebookLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider();
        this.afAuth.auth.signInWithPopup(provider).then(function (result) {
            console.log('success');
            this.token = result.credential.accessToken;
            this.result = result;
        }).catch(function (error) {
            console.log('error');
            console.log(error);
        });
    };
    LoginService.prototype.GoogleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        this.afAuth.auth.signInWithPopup(provider).then(function (result) {
            console.log('success');
            this.token = result.credential.accessToken;
            this.result = result;
        }).catch(function (error) {
            console.log('error');
            console.log(error);
        });
    };
    LoginService.prototype.UserLogin = function (result) {
        this.afAuth.auth.createUserWithEmailAndPassword(result.email, result.password).then(function (result) {
            console.log('success');
            this.token = result.credential.accessToken;
            this.result = result;
        }).catch(function (error) {
            console.log('error');
            console.log(error);
        });
    };
    LoginService.prototype.AnonymousLogin = function () {
        console.log('AnonymousLogin');
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInAnonymously().then(function (result) {
            console.log('success');
            console.log(result);
        }).catch(function (error) {
            console.log('error');
            console.log(error);
        });
    };
    LoginService.prototype.logout = function () {
        this.afAuth.auth.signOut().then(function (result) {
            console.log('success');
        }).catch(function (error) {
            console.log('error');
            console.log(error);
        });
    };
    LoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], LoginService);
    return LoginService;
    var _a, _b;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/musicgraph.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicgraphService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MusicgraphService = (function () {
    function MusicgraphService(http) {
        this.http = http;
        this.api_key = 'c8303e90962e3a5ebd5a1f260a69b138';
        this.url = 'http://api.musicgraph.com/api/v2/';
    }
    MusicgraphService.prototype.getArtist = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        headers.append('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + 'artist/' + id + '?api_key=' + this.api_key, options)
            .map(function (res) { return res.json(); });
    };
    MusicgraphService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
    ], MusicgraphService);
    return MusicgraphService;
    var _a;
}());

//# sourceMappingURL=musicgraph.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/musixmatch.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusixmatchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MusixmatchService = (function () {
    function MusixmatchService(http) {
        this.http = http;
        this.apikey = '780809dc9ade9abb31131927f850f1cc';
        this.url = 'http://api.musixmatch.com/ws/1.1/';
    }
    MusixmatchService.prototype.getAlbum = function (album_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        headers.append('Accept', 'application/json');
        //headers.append("Access-Control-Allow-Credentials", "true");
        //headers.append("Access-Control-Allow-Origin", "*");
        //headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        //headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + 'album.get?album_id=' + album_id + '&apikey=' + this.apikey, options)
            .map(function (res) { return res.json(); });
    };
    MusixmatchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
    ], MusixmatchService);
    return MusixmatchService;
    var _a;
}());

//# sourceMappingURL=musixmatch.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/spotify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_delay__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyLocalService; });
//https://atchai.com/blog/2016-05-03-in-search-of-the-perfect-music-dataset/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SpotifyLocalService = (function () {
    function SpotifyLocalService(http) {
        this.http = http;
        this.url = 'https://api.spotify.com/v1/';
        this.aws = 'http://ec2-54-69-27-164.us-west-2.compute.amazonaws.com:3000';
        this.newReleases = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.artistList = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.spotifyPlaylist = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.playlist01 = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.playlist02 = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.playlist03 = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.playlist04 = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.playlist05 = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        var that = this;
        // IntervalObservable.create(3600).subscribe(n => {
        //   console.log('interval');
        //   this.searchArtist('adele')
        //   .subscribe(data => {
        //       console.log(JSON.stringify(data,null,4));
        //     });
        // });
        //21pz7umxlqgx5gnpo7pzg7rna
        //this.getData('users/spotify/playlists').subscribe(data => console.log(data));
        //this.getData('users/digster.co.uk/playlists').subscribe(data => console.log(data));
        this.getData('users/21pz7umxlqgx5gnpo7pzg7rna/playlists').subscribe(function (list) { return that.playlist01.next(list); });
        this.getData('users/digster.co.uk/playlists?offset=0&limit=24').subscribe(function (list) { return that.playlist02.next(list); });
        this.getData('users/starbucks/playlists?offset=0&limit=24').subscribe(function (list) { return that.playlist03.next(list); });
        this.getData('users/filtr/playlists?offset=0&limit=24').subscribe(function (list) { return that.playlist04.next(list); });
        this.getData('users/filtr.ca/playlists?offset=1&limit=25').subscribe(function (list) { return that.playlist05.next(list); });
        // this.getData('artists?ids=04gDigrS5kc9YWfZHwBETP,4dpARuHxo51G3z768sgnrY,5Pwc4xIPtQLFEnJriah9YJ,06HL4z0CvFAxyc27GXpf02,5pKCCKE2ajJHZ9KAiaK11H,6VuMaDnrHyPL1p4EHjYLi7,1UTPBmNbXNTittyMJrNkvw')
        //   .subscribe(data => {
        //     console.log(data);
        //   });
        //
        // this.getData('recommendations/available-genre-seeds')
        //   .subscribe(data => {
        //     console.log(data);
        //   });
        // this.getData('browse/new-releases?country=US')
        //   .subscribe(data => {
        //     console.log(data);
        //   });
        // this.getData('browse/featured-playlists?country=US&limit=20')
        //   .subscribe(data => {
        //     console.log(data);
        //   });
        //
        // this.getData('recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_tracks=0c6xIDDpzE81m2q797ordA&min_energy=0.4&min_popularity=50&market=US')
        //   .subscribe(data => {
        //     console.log(data);
        //   });
        //this.getData('tracks/3n3Ppam7vgaVa1iaRUc9Lp').subscribe(data => console.log(data));
        //
        // this.getData('browse/categories')
        //   .subscribe(data => {
        //     console.log(data);
        //   });
        //
        //
        // this.getData('browse/categories/party')
        //   .subscribe(data => {
        //     console.log(data);
        //   });
        //
        //
        // this.getData('users/spotify_espa%C3%B1a/playlists/21THa8j9TaSGuXYNBU5tsC/tracks')
        //   .subscribe(data => {
        //     console.log(data);
        //   });
        //
        //
        // this.getData('tracks/3n3Ppam7vgaVa1iaRUc9Lp').subscribe(data => console.log(data));
        // this.getData('users/21pz7umxlqgx5gnpo7pzg7rna/playlists')
        //   .subscribe(data => {
        //     console.log(data);
        //   });
        //
        // this.getData('me/player/currently-playing')
        //   .subscribe(data => {
        //     console.log(data);
        //   });
        //
        // this.getData('me/following?type=artist&limit=20')
        //   .subscribe(data => {
        //     console.log(data);
        //   });
        //
        // this.getData('me/top/artists')
        //   .subscribe(data => {
        //     console.log(data);
        //   });
        //
        // this.getData('me/player/recently-played')
        //   .subscribe(data => {
        //     console.log(data);
        //   });
    }
    SpotifyLocalService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Bearer ' + this.access_token);
    };
    SpotifyLocalService.prototype.clientCredentials = function () {
        var _this = this;
        var releases = this.getData('browse/new-releases?country=US&offset=0&limit=48');
        var artists = this.getData('artists?ids=04gDigrS5kc9YWfZHwBETP,4dpARuHxo51G3z768sgnrY,5Pwc4xIPtQLFEnJriah9YJ,06HL4z0CvFAxyc27GXpf02,6VuMaDnrHyPL1p4EHjYLi7,1UTPBmNbXNTittyMJrNkvw');
        var spotify_playlist = this.getData('users/spotify/playlists?offset=0&limit=48');
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].forkJoin([releases, artists, spotify_playlist])
            .toPromise()
            .then(function (result) {
            _this.newReleases.next(result[0].albums.items);
            _this.artistList.next(result[1].artists);
            _this.spotifyPlaylist.next(result[2].items);
        })
            .catch(function (err) { return Promise.resolve(); });
        ;
    };
    SpotifyLocalService.prototype.getLocalMeta = function (id) {
        var meta = [
            {
                "id": "04gDigrS5kc9YWfZHwBETP",
                "bio": "MAROON 5 IS AN AMERICAN POP ROCK BAND THAT ORIGINATED IN LOS ANGELES, CALIFORNIA. IT CURRENTLY CONSISTS OF LEAD VOCALIST ADAM LEVINE, KEYBOARDIST AND RHYTHM GUITARIST JESSE CARMICHAEL, BASSIST MICKEY MADDEN, LEAD GUITARIST JAMES VALENTINE, DRUMMER MATT FLYNN AND KEYBOARDIST PJ MORTON. A MIX OF POLISHED POP/ROCK AND NEO-SOUL MADE MAROON 5 ONE OF THE MOST POPULAR BANDS OF THE NEW MILLENNIUM, WITH SONGS LIKE \"THIS LOVE, \" \"SHE WILL BE LOVED, \" AND \"MAKES ME WONDER\" ALL TOPPING THE CHARTS WORLDWIDE.",
                "headerImages": [
                    {
                        "height": 641,
                        "url": "https://i.scdn.co/image/d5d36ef5919bb439fb457549fdc4a0dcfe7b12f4",
                        "width": 1495
                    },
                    {
                        "height": 1140,
                        "url": "https://i.scdn.co/image/1b030260de8e8ac65c60fd28c55def8229d56d79",
                        "width": 2660
                    },
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/5c8d92ef8f02482fbafcdaf4c54a5036795bfb50",
                        "width": 1494
                    }
                ]
            }, {
                "id": "06HL4z0CvFAxyc27GXpf02",
                "bio": "Taylor Swift is that rarest of pop phenomena: a superstar who managed to completely cross over from country to the mainstream. Other singers performed similar moves -- notably, Dolly Parton and Willie Nelson both became enduring mainstream icons based on their '70s work -- but Swift shed her country roots like they were a second skin; it was a necessary molting to reveal she was perhaps the sharpest, savviest populist singer/songwriter of her generation, one who could harness the Zeitgeist and turn it personal and, just as impressively, perform the reverse.",
                "headerImages": [
                    {
                        "height": 641,
                        "url": "https://i.scdn.co/image/fedadb793b59f10bc5946043196e932530604a59",
                        "width": 1495
                    },
                    {
                        "height": 1140,
                        "url": "https://i.scdn.co/image/fb11623281343e336de1cd133ac3a02cea038702",
                        "width": 2660
                    },
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/e0a14d9225567dd6b5eb979dcbcd197896ff91de",
                        "width": 1494
                    }
                ]
            }, {
                "id": "4dpARuHxo51G3z768sgnrY",
                "bio": "When the U.K. press began dubbing Adele \"the next Amy Winehouse\" in late 2007, the hype didn't touch upon the singer/songwriter influence found in the Londoner's music. Influenced by Roberta Flack and Suzanne Vega as much as Jill Scott, Adele soon became a phenomenon in her own right; her second album, 21, eventually sold an estimated 30 million copies worldwide, making her one of the few sales successes in an age of digital streaming.",
                "headerImages": [
                    {
                        "height": null,
                        "url": "https://artistheader.scdn.co/4dpARuHxo51G3z768sgnrY/desktop_cat/4e6467c0-2f56-48ee-b8e1-78cb560a8222",
                        "width": null
                    }
                ]
            }, {
                "id": "5Pwc4xIPtQLFEnJriah9YJ",
                "bio": "Featuring the anthemic songwriting of Ryan Tedder, and balancing pop with alternative rock influences, OneRepublic became a regular presence on the charts of North America, Europe, and Australasia beginning with their 2007 debut. A Timbaland remix of its lead single, \"Apologize,\" landed in the Top Three in well over dozen countries and was, at the time, the best-selling digital download in U.S. history.",
                "headerImages": [
                    {
                        "height": null,
                        "url": "https://i.scdn.co/image/258cd5da9bdf6dfcab8c3fe3c47f398b771d38bc",
                        "width": null
                    }
                ]
            }, {
                "id": "6VuMaDnrHyPL1p4EHjYLi7",
                "bio": "American pop singer/songwriter Charlie Puth began his career with acoustic covers uploaded to YouTube. Ellen DeGeneres was an early supporter and she signed the Berklee College alum -- along with his duet partner, Emily Luther -- to her Warner Bros.-affiliated ElevenEleven label. Though nothing materialized from that deal, Puth eventually signed with Atlantic. In early 2015, he released his debut single, \"Marvin Gaye,\" a duet with Meghan Trainor. Shortly thereafter, he gained greater exposure as the co-songwriter, pianist, and featured vocalist on Wiz Khalifa's \"See You Again,\" recorded as a tribute to actor Paul Walker for the soundtrack to Furious 7.",
                "headerImages": [
                    {
                        "height": null,
                        "url": "https://i.scdn.co/image/4c6a7087672062b84b5f77241106122004da1fbd",
                        "width": null
                    }
                ]
            }, {
                "id": "1UTPBmNbXNTittyMJrNkvw",
                "bio": "Blake Shelton may have been an unlikely candidate for superstardom but that's hardly due to a lack of charisma. Shelton possessed a warm, masculine ease that lent his rowdier numbers a sense of sly humor but this relaxed touch also made him an effective crooner of ballads, the ace in the hole that helped him cross over from country to the mainstream in the 2010s.",
                "headerImages": [
                    {
                        "height": null,
                        "url": "https://i.scdn.co/image/5b8668d9da9af210360b7af8fdca2bff543648db",
                        "width": null
                    }
                ]
            }
        ];
        var result = meta.filter(function (x) { return x.id == id; });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(result[0]).delay(0);
    };
    SpotifyLocalService.prototype.getNewReleases = function () {
        return this.newReleases.asObservable();
    };
    SpotifyLocalService.prototype.getArtistList = function () {
        return this.artistList.asObservable();
    };
    SpotifyLocalService.prototype.getSpotifyPlaylist = function () {
        return this.spotifyPlaylist.asObservable();
    };
    SpotifyLocalService.prototype.getMyPlaylists = function () {
        return this.playlist01.asObservable();
    };
    SpotifyLocalService.prototype.getPlaylist02 = function () {
        return this.playlist02.asObservable();
    };
    SpotifyLocalService.prototype.getPlaylist03 = function () {
        return this.playlist03.asObservable();
    };
    SpotifyLocalService.prototype.getPlaylist04 = function () {
        return this.playlist04.asObservable();
    };
    SpotifyLocalService.prototype.getPlaylist05 = function () {
        return this.playlist05.asObservable();
    };
    SpotifyLocalService.prototype.getData = function (api) {
        var _this = this;
        return this.http.get(this.aws + '/token')
            .map(function (res) { return res.json(); })
            .switchMap(function (data) {
            _this.access_token = data.access_token;
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
            headers.append('Authorization', 'Bearer ' + _this.access_token);
            return _this.http.get(_this.url + api, {
                headers: headers
            }).map(function (res) { return res.json(); });
        });
    };
    SpotifyLocalService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
    ], SpotifyLocalService);
    return SpotifyLocalService;
    var _a;
}());

//# sourceMappingURL=spotify.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map