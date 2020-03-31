import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AccountPage } from '../account/account';
import { AuthService } from '../../core/service/auth.service';
import { ImageService } from '../../core/service/image.service';
import { UserService } from '../../core/service/user.service';
import { UserData } from '../../providers/user-data';

describe('AccountPage', () => {
  let component: AccountPage;
  let fixture: ComponentFixture<AccountPage>;
  beforeEach(() => {
    const angularFireStorageStub = () => ({});
    const routerStub = () => ({});
    const alertControllerStub = () => ({
      create: object => ({ present: () => ({}) })
    });
    const navControllerStub = () => ({ navigateForward: string => ({}) });
    const authServiceStub = () => ({
      authState: { email: {}, uid: {}, displayName: {} }
    });
    const imageServiceStub = () => ({
      getUserImageList: email => ({ subscribe: f => f({}) }),
      getImages: email => ({ subscribe: f => f({}) }),
      deleteImage: (id, email) => ({}),
      getTmpImages: email => ({}),
      CreateImageList: (tmpData, email) => ({})
    });
    const userServiceStub = () => ({
      getThisUser: email => ({}),
      updateUser: user => ({})
    });
    const userDataStub = () => ({});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AccountPage],
      providers: [
        { provide: AngularFireStorage, useFactory: angularFireStorageStub },
        { provide: Router, useFactory: routerStub },
        { provide: AlertController, useFactory: alertControllerStub },
        { provide: NavController, useFactory: navControllerStub },
        { provide: AuthService, useFactory: authServiceStub },
        { provide: ImageService, useFactory: imageServiceStub },
        { provide: UserService, useFactory: userServiceStub },
        { provide: UserData, useFactory: userDataStub }
      ]
    });
    fixture = TestBed.createComponent(AccountPage);
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
      spyOn(userServiceStub, 'getThisUser').and.callThrough();
      component.ngOnInit();
      expect(component.loadPhotos).toHaveBeenCalled();
      expect(userServiceStub.getThisUser).toHaveBeenCalled();
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
  describe('support', () => {
    it('makes expected calls', () => {
      const navControllerStub: NavController = fixture.debugElement.injector.get(
        NavController
      );
      spyOn(navControllerStub, 'navigateForward').and.callThrough();
      component.support();
      expect(navControllerStub.navigateForward).toHaveBeenCalled();
    });
  });
  describe('existsAlert', () => {
    it('makes expected calls', () => {
      const alertControllerStub: AlertController = fixture.debugElement.injector.get(
        AlertController
      );
      spyOn(alertControllerStub, 'create').and.callThrough();
      component.existsAlert();
      expect(alertControllerStub.create).toHaveBeenCalled();
    });
  });
});
