import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController, NavController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { AuthService } from './core/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

  dark = false;
  loggedIn = false;

  appPages = [
    {
      title: 'Inbox',
      url: '/app/tabs/inbox',
      icon: 'albums'
    },
    {
      title: 'Proposals',
      url: '/app/tabs/proposal',
      icon: 'map'
    },
    {
      title: 'People',
      url: '/app/tabs/people',
      icon: 'keypad'
    },
    {
      title: 'Account',
      url: '/app/tabs/account',
      icon: 'man'
    },
    {
      title: 'Support',
      url: '/app/tabs/support',
      icon: 'mail'
    }
  ];


  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    public authService: AuthService,
    public router: Router
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    this.router.navigateByUrl('login');

    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        position: 'bottom',
        buttons: [
          {
            role: 'cancel',
            text: 'Reload'
          }
        ]
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public navigateInbox(): void {
    this.router.navigateByUrl('app/tabs/inbox');
  }

  public navigatePeople(): void {
    this.router.navigateByUrl('app/tabs/people');
  }

  public navigateProposal(): void {
    this.router.navigateByUrl('app/tabs/proposal');
  }

  public navigateAccount(): void {
    this.router.navigateByUrl('app/tabs/account');
  }

  public navigateSupport(): void {
    this.router.navigateByUrl('app/tabs/support');
  }

  public logout(): void {
    this.authService.signOut();
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.navCtrl.navigateForward('/tutorial');
  }

}
