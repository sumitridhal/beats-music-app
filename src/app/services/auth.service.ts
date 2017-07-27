import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
  displayName: string;
  email: string;
  isAnonymous: boolean;
  phoneNumber: string;
  photoURL: string;
  uid: string;
  private isAuth: Subject<boolean> = new BehaviorSubject(false);
  private isCustom: Subject<boolean> = new BehaviorSubject(false);
  private user: BehaviorSubject<{
    displayName: string, photoURL: string, isAnonymous: boolean, email: string, phoneNumber: string, uid: string
  }> = new BehaviorSubject({ displayName: '', photoURL: '', isAnonymous: false, email: '', phoneNumber: '', uid: '' });

  setAuth(data) {
    console.log('setAuth ', data)
    //this.isAuth.next(false);
    if (data) {
      if (data.displayName == '' || data.displayName == null && data.isAnonymous) {
        let objA = {
          displayName: 'Anonymous',
          photoURL: 'assets/img/avatar/small/anonymous.png',
          isAnonymous: true,
          email: '',
          phoneNumber: '',
          uid: data.uid
        }

        this.user.next(objA);
        this.isAuth.next(true);
      } else {
        let objU = {
          displayName: data.displayName,
          photoURL: data.photoURL,
          isAnonymous: false,
          email: data.email,
          phoneNumber: data.phoneNumber,
          uid: data.uid
        }
        this.user.next(objU);
        this.isAuth.next(true);
      }
    }
    else {
      this.isAuth.next(false);
    }
  }

  getAuth(): Observable<boolean> {
    return this.isAuth.asObservable();
  }

  getCustom(): Observable<boolean> {
    return this.isCustom.asObservable();
  }

  setCustom(val: boolean) {
    this.isCustom.next(val);
  }

  getUser(): Observable<{ displayName: string, photoURL: string, isAnonymous: boolean, email: string, phoneNumber: string, uid: string } > {
    return this.user.asObservable();
  }

}
