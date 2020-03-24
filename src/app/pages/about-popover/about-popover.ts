import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { PopoverController, NavController } from '@ionic/angular';

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="close('https://github.com/hellochrisyou/Messaging-App-Angular-Ionic')">
        <ion-label>GitHub Repo</ion-label>
      </ion-item>
      <ion-item button (click)="support()">
        <ion-label>Support</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(private navCtrl: NavController, public router: Router, public popoverCtrl: PopoverController) { }

  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
    this.navCtrl.navigateForward('/support');
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
