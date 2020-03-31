import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { InboxComponent } from '../app/pages/inbox/inbox.component';
import { AuthService } from '../app/core/service/auth.service';
import { EmitService } from '../app/core/service/emit.service';
import { MessagingService } from '../app/core/service/messaging.service';
import { ProposalService } from '../app/core/service/proposal.service';
import { UserService } from '../app/core/service/user.service';
import { } from 'jasmine';

describe('InboxComponent', () => {
  let component: InboxComponent;
  let fixture: ComponentFixture<InboxComponent>;
  beforeEach(() => {
    const changeDetectorRefStub = () => ({});
    const alertControllerStub = () => ({
      create: object => ({ present: () => ({}) })
    });
    const modalControllerStub = () => ({
      create: object => ({ present: () => ({}) })
    });
    const navControllerStub = () => ({
      navigateForward: (array, navigationExtras) => ({})
    });
    const toastControllerStub = () => ({
      create: object => ({ present: () => ({}) })
    });
    const authServiceStub = () => ({ authState: { email: {}, photoURL: {} } });
    const emitServiceStub = () => ({});
    const messagingServiceStub = () => ({
      getMessages: email => ({ get: () => ({ subscribe: f => f({}) }) }),
      senderMessage: (tmpData, email, email1) => ({})
    });
    const proposalServiceStub = () => ({ sendProposal: thisProposal => ({}) });
    const userServiceStub = () => ({
      getUsers: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [InboxComponent],
      providers: [
        { provide: ChangeDetectorRef, useFactory: changeDetectorRefStub },
        { provide: AlertController, useFactory: alertControllerStub },
        { provide: ModalController, useFactory: modalControllerStub },
        { provide: NavController, useFactory: navControllerStub },
        { provide: ToastController, useFactory: toastControllerStub },
        { provide: AuthService, useFactory: authServiceStub },
        { provide: EmitService, useFactory: emitServiceStub },
        { provide: MessagingService, useFactory: messagingServiceStub },
        { provide: ProposalService, useFactory: proposalServiceStub },
        { provide: UserService, useFactory: userServiceStub }
      ]
    });
    fixture = TestBed.createComponent(InboxComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('status defaults to: inbox', () => {
    expect(component.status).toEqual('inbox');
  });
  it('tmpMessages defaults to: []', () => {
    expect(component.tmpMessages).toEqual([]);
  });
  describe('ionViewDidEnter', () => {
    it('makes expected calls', () => {
      const userServiceStub: UserService = fixture.debugElement.injector.get(
        UserService
      );
      spyOn(userServiceStub, 'getUsers').and.callThrough();
      component.ionViewDidEnter();
      expect(userServiceStub.getUsers).toHaveBeenCalled();
    });
  });
});
