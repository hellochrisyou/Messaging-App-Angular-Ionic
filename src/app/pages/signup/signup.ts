import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { AuthService } from '../../core/service/auth.service';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {

  submitted = false;

  signup: UserOptions = { email: '', password: '' };

  constructor(
    private authService: AuthService,
    public router: Router,
    public userData: UserData,
  ) { }

  public onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      // this.userData.signup(this.signup.username);
      this.authService.signupEmail(this.signup.email, this.signup.password);
    }
  }

  public navigateLogin(): void {
    this.router.navigateByUrl('/login');
  }
}
