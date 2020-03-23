import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { AuthService } from '../../core/service/auth.service';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    private authService: AuthService
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.authService.signinEmail(this.login.username, this.login.password);
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/app/tabs/friends');
    }
  }
  public loginGoogle(): void {
    this.authService.signinGoogle();
  }
  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
