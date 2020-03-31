import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginPage } from '../login/login';
import { UserData } from '../../providers/user-data';
import { AuthService } from '../../core/service/auth.service';
describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  beforeEach(() => {
    const ngFormStub = () => ({ valid: {} });
    const routerStub = () => ({});
    const userDataStub = () => ({ login: username => ({}) });
    const authServiceStub = () => ({
      signinEmail: (username, password) => ({}),
      signinGoogle: () => ({}),
      signinFacebook: () => ({}),
      signinTwitter: () => ({})
    });
    const navControllerStub = () => ({ navigateForward: string => ({}) });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LoginPage],
      providers: [
        { provide: NgForm, useFactory: ngFormStub },
        { provide: Router, useFactory: routerStub },
        { provide: UserData, useFactory: userDataStub },
        { provide: AuthService, useFactory: authServiceStub },
        { provide: NavController, useFactory: navControllerStub }
      ]
    });
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('submitted defaults to: false', () => {
    expect(component.submitted).toEqual(false);
  });
  describe('onLogin', () => {
    it('makes expected calls', () => {
      const ngFormStub: NgForm = fixture.debugElement.injector.get(NgForm);
      const userDataStub: UserData = fixture.debugElement.injector.get(
        UserData
      );
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      const navControllerStub: NavController = fixture.debugElement.injector.get(
        NavController
      );
      spyOn(userDataStub, 'login').and.callThrough();
      spyOn(authServiceStub, 'signinEmail').and.callThrough();
      spyOn(navControllerStub, 'navigateForward').and.callThrough();
      component.onLogin(ngFormStub);
      expect(userDataStub.login).toHaveBeenCalled();
      expect(authServiceStub.signinEmail).toHaveBeenCalled();
      expect(navControllerStub.navigateForward).toHaveBeenCalled();
    });
  });
  describe('loginGoogle', () => {
    it('makes expected calls', () => {
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'signinGoogle').and.callThrough();
      component.loginGoogle();
      expect(authServiceStub.signinGoogle).toHaveBeenCalled();
    });
  });
  describe('loginFacebook', () => {
    it('makes expected calls', () => {
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'signinFacebook').and.callThrough();
      component.loginFacebook();
      expect(authServiceStub.signinFacebook).toHaveBeenCalled();
    });
  });
  describe('loginTwitter', () => {
    it('makes expected calls', () => {
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'signinTwitter').and.callThrough();
      component.loginTwitter();
      expect(authServiceStub.signinTwitter).toHaveBeenCalled();
    });
  });
  describe('onSignup', () => {
    it('makes expected calls', () => {
      const navControllerStub: NavController = fixture.debugElement.injector.get(
        NavController
      );
      spyOn(navControllerStub, 'navigateForward').and.callThrough();
      component.onSignup();
      expect(navControllerStub.navigateForward).toHaveBeenCalled();
    });
  });
});
