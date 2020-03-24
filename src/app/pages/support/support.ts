import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../../core/service/auth.service';


@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
  styleUrls: ['./support.scss'],
})
export class SupportPage {

  submitted = false;
  supportMessage: string;

  constructor(
    private emailComposer: EmailComposer,
    public alertCtrl: AlertController,
    public authService: AuthService,
    public toastCtrl: ToastController,
  ) { }


  async submit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.supportMessage = '';
      this.submitted = false;

      const email = {
        to: 'hellochrisyou@gmail.com',
        from: this.authService.authState.email,
        subject: 'Support Help',
        body: this.supportMessage,
        isHtml: true
      };

      this.emailComposer.open(email);

      const toast = await this.toastCtrl.create({
        message: 'Your support request has been sent.',
        duration: 3000
      });
      await toast.present();
    }
  }
}
