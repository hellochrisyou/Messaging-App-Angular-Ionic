import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedCardPage } from '../app/shared/component/card/card.component';
import { UserService } from '../app/core/service/user.service';
import { MessagingService } from '../app/core/service/messaging.service';
import { AuthService } from '../app/core/service/auth.service';
fdescribe('SharedCardPage', () => {
  let component: SharedCardPage;
  let fixture: ComponentFixture<SharedCardPage>;
  beforeEach(() => {
    const userServiceStub = () => ({
      getUsers: () => ({ subscribe: f => f({}) })
    });
    const messagingServiceStub = () => ({
      getUserMessages: (email, email1) => ({ subscribe: f => f({}) })
    });
    const authServiceStub = () => ({ authState: { email: {} } });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SharedCardPage],
      providers: [
        { provide: UserService, useFactory: userServiceStub },
        { provide: MessagingService, useFactory: messagingServiceStub },
        { provide: AuthService, useFactory: authServiceStub }
      ]
    });
    fixture = TestBed.createComponent(SharedCardPage);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const userServiceStub: UserService = fixture.debugElement.injector.get(
        UserService
      );
      const messagingServiceStub: MessagingService = fixture.debugElement.injector.get(
        MessagingService
      );
      spyOn(userServiceStub, 'getUsers').and.callThrough();
      spyOn(messagingServiceStub, 'getUserMessages').and.callThrough();
      component.ngOnInit();
      expect(userServiceStub.getUsers).toHaveBeenCalled();
      expect(messagingServiceStub.getUserMessages).toHaveBeenCalled();
    });
  });
});
