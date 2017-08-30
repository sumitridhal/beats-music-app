import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AuthService } from "./auth.service";

@Injectable()
export class LoginService {
  user: Observable<firebase.User>;
  name: any;
  token: any;
  result: any;

  constructor(private afAuth: AngularFireAuth, public sAuth: AuthService) {
    this.user = afAuth.authState;
    // this.afAuth.authState.subscribe(auth => {
    //   this.sAuth.setAuth(auth);  //Also for Logout State
    //   this.name = '';
    //   if (auth) {
    //     this.name = auth;
    //   }
    // })
  }


  FacebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then(function(result) {
      console.log('success')
      this.token = result.credential.accessToken;
      this.result = result;
    }).catch(function(error) {
      console.log('error')
      console.log(error)
    });
  }

  GoogleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then(function(result) {
      console.log('success')
      this.token = result.credential.accessToken;
      this.result = result;
    }).catch(function(error) {
      console.log('error')
      console.log(error)
    });
  }

  UserLogin(result: any) {
    this.afAuth.auth.createUserWithEmailAndPassword(result.email, result.password).then(function(result) {
      console.log('success')
      this.token = result.credential.accessToken;
      this.result = result;
    }).catch(function(error) {
      console.log('error')
      console.log(error)
    });
  }

  AnonymousLogin() {
    console.log('AnonymousLogin')
    firebase.auth().signInAnonymously().then(function(result) {
      console.log('success');
      console.log(result)
    }).catch(function(error) {
      console.log('error')
      console.log(error)
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(function(result) {
      console.log('success')
    }).catch(function(error) {
      console.log('error')
      console.log(error)
    });
  }

}
