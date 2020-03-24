import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class CheckTutorial implements CanLoad {
  constructor(private navCtrl: NavController, private storage: Storage, private router: Router) { }

  canLoad() {
    return this.storage.get('ion_did_tutorial').then(res => {
      if (res) {
        this.navCtrl.navigateForward(['/app', 'tabs', 'schedule']);
        return false;
      } else {
        return true;
      }
    });
  }
}
