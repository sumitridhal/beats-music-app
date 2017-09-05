import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from "./services/auth.service";
import { SidebarService } from "./components/sidebar/sidebar.service";
import { Subscription } from 'rxjs/Subscription';

declare var $: any;

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  isAuth: boolean;
  isVisible: boolean = true;
  private _subscription1: Subscription;
  private _subscription2: Subscription;
  bodeElem: any;
  hideScroll: string = "hide-scroll"

  constructor(private sAuth: AuthService, private sBar: SidebarService) {
    this.isAuth = false;
    this.bodeElem = document.getElementsByTagName('body')[0];
    this._subscription1 = this.sAuth.getAuth().subscribe((value: boolean) => {
      this.isAuth = value
    })

    this._subscription2 = this.sBar.get().subscribe(value => {
      this.isVisible = value;
      if (this.isVisible) {
        this.bodeElem.classList.add(this.hideScroll);
      } else {
        this.bodeElem.classList.remove(this.hideScroll);
      }
    });
  }

  @HostListener('click', ['$event'])
  onClick(e: any): void {
    setTimeout(() => {
      if (this.isVisible) {
        this.sBar.set(false);
      }
    }, 0)
  }


  ngOnInit(){
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this._subscription1.unsubscribe();
    this._subscription2.unsubscribe();
  }

}
