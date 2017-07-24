import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: '[app-sidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isVisible: boolean = false;
  aURL: string;
  private _subscription1: Subscription;
  private _subscription2: Subscription;

  constructor(private router: Router, private sBar: SidebarService, private el: ElementRef) {
    this._subscription1 = this.sBar.get().subscribe(value => {
      this.isVisible = value
    })

    this._subscription2 = this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((event) => {
        this.aURL = this.router.url
        this.sBar.set(false);
      })

  }

  ngOnInit() {
    var nativeElement: HTMLElement = this.el.nativeElement,
      parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
  }

  // public toggle(): void {
  //   console.log(this.isVisible)
  //   let visible = !this.isVisible;
  //   this.sBar.set(true)
  // }

  ngOnDestroy() {
    this._subscription1.unsubscribe();
    this._subscription2.unsubscribe();
  }

}
