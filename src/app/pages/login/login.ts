import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { AuthService } from '../../core/service/auth.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {

  submitted = false;

  login: UserOptions = { username: '', password: '' };

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    public router: Router,
    public userData: UserData,

  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.authService.signinEmail(this.login.username, this.login.password);
      this.userData.login(this.login.username);
      this.navCtrl.navigateForward('/app/tabs/friends');
    }
  }
  public loginGoogle(): void {
    this.authService.signinGoogle();
  }
  public loginFacebook(): void {
    this.authService.signinFacebook();
  }
  public loginTwitter(): void {
    this.authService.signinTwitter();
  }
  onSignup() {
    this.navCtrl.navigateForward('/signup');
  }
}
