import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ImageService } from '../../../core/service/image.service';
import { UserService } from '../../../core/service/user.service';
import { ProfileModal } from '../profile/profile.component';
describe('ProfileModal', () => {
  let component: ProfileModal;
  let fixture: ComponentFixture<ProfileModal>;
  beforeEach(() => {
    const alertControllerStub = () => ({});
    const modalControllerStub = () => ({});
    const navParamsStub = () => ({ get: string => ({}) });
    const toastControllerStub = () => ({
      create: object => ({ present: () => ({}) })
    });
    const imageServiceStub = () => ({
      getUserImageList: _email => ({ subscribe: f => f({}) })
    });
    const userServiceStub = () => ({
      getUsers: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProfileModal],
      providers: [
        { provide: AlertController, useFactory: alertControllerStub },
        { provide: ModalController, useFactory: modalControllerStub },
        { provide: NavParams, useFactory: navParamsStub },
        { provide: ToastController, useFactory: toastControllerStub },
        { provide: ImageService, useFactory: imageServiceStub },
        { provide: UserService, useFactory: userServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ProfileModal);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('imageUrls defaults to: []', () => {
    expect(component.imageUrls).toEqual([]);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const userServiceStub: UserService = fixture.debugElement.injector.get(
        UserService
      );
      spyOn(component, 'loadPhotos').and.callThrough();
      spyOn(userServiceStub, 'getUsers').and.callThrough();
      component.ngOnInit();
      expect(component.loadPhotos).toHaveBeenCalled();
      expect(userServiceStub.getUsers).toHaveBeenCalled();
    });
  });
  describe('loadPhotos', () => {
    it('makes expected calls', () => {
      const imageServiceStub: ImageService = fixture.debugElement.injector.get(
        ImageService
      );
      spyOn(imageServiceStub, 'getUserImageList').and.callThrough();
      component.loadPhotos();
      expect(imageServiceStub.getUserImageList).toHaveBeenCalled();
    });
  });
});
