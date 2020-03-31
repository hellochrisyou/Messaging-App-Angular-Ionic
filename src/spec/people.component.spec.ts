import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PeoplePage } from '../people/people.component';
import { UserService } from '../../core/service/user.service';
import { MessagingService } from '../../core/service/messaging.service';
import { AuthService } from '../../core/service/auth.service';
describe('PeoplePage', () => {
  let component: PeoplePage;
  let fixture: ComponentFixture<PeoplePage>;
  beforeEach(() => {
    const userServiceStub = () => ({
      getUsers: () => ({ subscribe: f => f({}) })
    });
    const messagingServiceStub = () => ({
      getMessages: email => ({ get: () => ({ subscribe: f => f({}) }) }),
      senderMessage: (tmpData, email, email1) => ({})
    });
    const authServiceStub = () => ({ authState: { email: {}, photoURL: {} } });
    const navControllerStub = () => ({});
    const alertControllerStub = () => ({
      create: object => ({ present: () => ({}) })
    });
    const toastControllerStub = () => ({
      create: object => ({ present: () => ({}) })
    });
    const modalControllerStub = () => ({
      create: object => ({ present: () => ({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PeoplePage],
      providers: [
        { provide: UserService, useFactory: userServiceStub },
        { provide: MessagingService, useFactory: messagingServiceStub },
        { provide: AuthService, useFactory: authServiceStub },
        { provide: NavController, useFactory: navControllerStub },
        { provide: AlertController, useFactory: alertControllerStub },
        { provide: ToastController, useFactory: toastControllerStub },
        { provide: ModalController, useFactory: modalControllerStub }
      ]
    });
    fixture = TestBed.createComponent(PeoplePage);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('status defaults to: people', () => {
    expect(component.status).toEqual('people');
  });
  it('tmpMessages defaults to: []', () => {
    expect(component.tmpMessages).toEqual([]);
  });
});
