import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignupPage } from '../signup/signup';
import { UserData } from '../../providers/user-data';
import { AuthService } from '../../core/service/auth.service';
describe('SignupPage', () => {
  let component: SignupPage;
  let fixture: ComponentFixture<SignupPage>;
  beforeEach(() => {
    const ngFormStub = () => ({ valid: {} });
    const routerStub = () => ({});
    const userDataStub = () => ({});
    const authServiceStub = () => ({
      signupEmail: (username, password) => ({})
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SignupPage],
      providers: [
        { provide: NgForm, useFactory: ngFormStub },
        { provide: Router, useFactory: routerStub },
        { provide: UserData, useFactory: userDataStub },
        { provide: AuthService, useFactory: authServiceStub }
      ]
    });
    fixture = TestBed.createComponent(SignupPage);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('submitted defaults to: false', () => {
    expect(component.submitted).toEqual(false);
  });
  describe('onSignup', () => {
    it('makes expected calls', () => {
      const ngFormStub: NgForm = fixture.debugElement.injector.get(NgForm);
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'signupEmail').and.callThrough();
      component.onSignup(ngFormStub);
      expect(authServiceStub.signupEmail).toHaveBeenCalled();
    });
  });
});
