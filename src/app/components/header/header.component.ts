import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { LoginService } from "../../services/login.service";
import { SidebarComponent } from "./../sidebar/sidebar.component";
import { SidebarService } from "./../sidebar/sidebar.service";
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';

export interface IContext {
  data: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth: boolean;
  custom: boolean = false;
  sidebarVisible: boolean = false;
  user: any;
  aURL: string;
  userSelectSubject: BehaviorSubject<{ name: string, img: string }> = new BehaviorSubject({ name: '', img: '' });
  private _subscription1: Subscription;
  private _subscription2: Subscription;
  private _subscription3: Subscription;
  private _subscription4: Subscription;
  private _subscription5: Subscription;
  @ViewChild('modalTemplate')
  public modalTemplate: ModalTemplate<IContext, string, string>

  constructor(private el: ElementRef, private router: Router, private sAuth: AuthService, private sLogin: LoginService, public modalService: SuiModalService, private sBar: SidebarService) {
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
    }

    this._subscription1 = this.sAuth.getAuth().subscribe((value: boolean) => this.isAuth = value);
    this._subscription2 = this.sAuth.getCustom().subscribe((value: boolean) => this.custom = value);
    this._subscription3 = this.userSelectSubject.subscribe((newUser) => {
      this.user.selected = newUser
      if (this.custom) {
        this.sAuth.setAuth({
          displayName: this.user.selected.name,
          email: '',
          isAnonymous: false,
          phoneNumber: '',
          photoURL: this.user.selected.img,
          uid: 'header.constructor.user.BehaviorSubject.subscribe'
        })
      }
    });
    this._subscription4 = router.events.subscribe((route: any) => this.aURL = route.url);
    this._subscription5 = this.sBar.get().subscribe(value => {
      this.sidebarVisible = value
    });
  }

  ngOnInit() {
    var nativeElement: HTMLElement = this.el.nativeElement,
      parentElement: HTMLElement = nativeElement.parentElement;
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    parentElement.removeChild(nativeElement);
  }

  private login(name) {
    this.sLogin[name + 'Login']();
  }

  private logout() {
    this.sLogin.logout();
  }

  private cLogout() {
    this.sAuth.setCustom(false);
    this.sAuth.setAuth(null);
  }

  public customLogin(user) {
    this.sAuth.setCustom(true);
    this.userSelectSubject.next({ name: 'Jenny Hess', img: 'assets/img/avatar/small/jenny.jpg' });
  }

  public changeUser(item) {
    this.userSelectSubject.next(item)
  }

  public getUser() {
    return this.user.selected;
  }

  public open(dynamicContent: string) {
    setTimeout(() => {
      const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);
      config.closeResult = "closed!";
      config.context = { data: dynamicContent };
      this.modalService
        .open(config)
        .onApprove(result => {
          this.sLogin.UserLogin(result)
        })
        .onDeny(result => { /* deny callback */ });
    }, 0)
  }

  public sbToggle(event: any): void {
    event.stopPropagation();
    this.sBar.set(!this.sidebarVisible);
  }

  ngOnDestroy() {
    this._subscription1.unsubscribe();
    this._subscription2.unsubscribe();
    this._subscription3.unsubscribe();
    this._subscription4.unsubscribe();
  }

}
