import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../core/service/auth.service';
import { FormsModule } from '@angular/forms';
import { SupportPage } from './support';
describe('SupportPage', () => {
  let component: SupportPage;
  let fixture: ComponentFixture<SupportPage>;
  beforeEach(() => {
    const ngFormStub = () => ({ valid: {} });
    const emailComposerStub = () => ({ open: email => ({}) });
    const alertControllerStub = () => ({});
    const toastControllerStub = () => ({
      create: object => ({ present: () => ({}) })
    });
    const authServiceStub = () => ({ authState: { email: {} } });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SupportPage],
      providers: [
        { provide: NgForm, useFactory: ngFormStub },
        { provide: EmailComposer, useFactory: emailComposerStub },
        { provide: AlertController, useFactory: alertControllerStub },
        { provide: ToastController, useFactory: toastControllerStub },
        { provide: AuthService, useFactory: authServiceStub }
      ]
    });
    fixture = TestBed.createComponent(SupportPage);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('submitted defaults to: false', () => {
    expect(component.submitted).toEqual(false);
  });
  describe('submit', () => {
    it('makes expected calls', () => {
      const ngFormStub: NgForm = fixture.debugElement.injector.get(NgForm);
      const emailComposerStub: EmailComposer = fixture.debugElement.injector.get(
        EmailComposer
      );
      const toastControllerStub: ToastController = fixture.debugElement.injector.get(
        ToastController
      );
      spyOn(emailComposerStub, 'open').and.callThrough();
      spyOn(toastControllerStub, 'create').and.callThrough();
      component.submit(ngFormStub);
      expect(emailComposerStub.open).toHaveBeenCalled();
      expect(toastControllerStub.create).toHaveBeenCalled();
    });
  });
});
