import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SidebarService {
isVisible: Subject<boolean> = new BehaviorSubject(false);
  constructor() { }

  public get(): Observable<boolean> {
    return this.isVisible.asObservable();
  }

  public set(val: boolean): void {
    this.isVisible.next(val);
  }
}
