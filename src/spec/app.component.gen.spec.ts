import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { AppComponent } from '../app/app.component';
import { UserData } from '../app/providers/user-data';
import { AuthService } from '../app/core/service/auth.service';
import { } from 'jasmine';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    const swUpdateStub = () => ({
      available: { subscribe: f => f({}) },
      activateUpdate: () => ({})
    });
    const menuControllerStub = () => ({ enable: arg => ({}) });
    const platformStub = () => ({ ready: () => ({ then: () => ({}) }) });
    const toastControllerStub = () => ({
      create: object => ({
        present: () => ({}),
        onDidDismiss: () => ({ then: () => ({ then: () => ({}) }) })
      })
    });
    const navControllerStub = () => ({ navigateForward: string => ({}) });
    const splashScreenStub = () => ({ hide: () => ({}) });
    const statusBarStub = () => ({ styleDefault: () => ({}) });
    const storageStub = () => ({ set: (string, arg) => ({}) });
    const userDataStub = () => ({ isLoggedIn: () => ({ then: () => ({}) }) });
    const authServiceStub = () => ({ signOut: () => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [
        { provide: SwUpdate, useFactory: swUpdateStub },
        { provide: MenuController, useFactory: menuControllerStub },
        { provide: Platform, useFactory: platformStub },
        { provide: ToastController, useFactory: toastControllerStub },
        { provide: NavController, useFactory: navControllerStub },
        { provide: SplashScreen, useFactory: splashScreenStub },
        { provide: StatusBar, useFactory: statusBarStub },
        { provide: Storage, useFactory: storageStub },
        { provide: UserData, useFactory: userDataStub },
        { provide: AuthService, useFactory: authServiceStub }
      ]
    });
    spyOn(AppComponent.prototype, 'initializeApp');
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('dark defaults to: false', () => {
    expect(component.dark).toEqual(false);
  });
  it('loggedIn defaults to: false', () => {
    expect(component.loggedIn).toEqual(false);
  });
  it('appPages defaults to: [, ]', () => {
    expect(component.appPages).toEqual([,]);
  });
  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(AppComponent.prototype.initializeApp).toHaveBeenCalled();
    });
  });
  describe('initializeApp', () => {
    it('makes expected calls', () => {
      const platformStub: Platform = fixture.debugElement.injector.get(
        Platform
      );
      const splashScreenStub: SplashScreen = fixture.debugElement.injector.get(
        SplashScreen
      );
      const statusBarStub: StatusBar = fixture.debugElement.injector.get(
        StatusBar
      );
      spyOn(platformStub, 'ready').and.callThrough();
      spyOn(splashScreenStub, 'hide').and.callThrough();
      spyOn(statusBarStub, 'styleDefault').and.callThrough();
      (<jasmine.Spy>component.initializeApp).and.callThrough();
      component.initializeApp();
      expect(platformStub.ready).toHaveBeenCalled();
      expect(splashScreenStub.hide).toHaveBeenCalled();
      expect(statusBarStub.styleDefault).toHaveBeenCalled();
    });
  });
  describe('checkLoginStatus', () => {
    it('makes expected calls', () => {
      const userDataStub: UserData = fixture.debugElement.injector.get(
        UserData
      );
      spyOn(component, 'updateLoggedInStatus').and.callThrough();
      spyOn(userDataStub, 'isLoggedIn').and.callThrough();
      component.checkLoginStatus();
      expect(component.updateLoggedInStatus).toHaveBeenCalled();
      expect(userDataStub.isLoggedIn).toHaveBeenCalled();
    });
  });
  describe('listenForLoginEvents', () => {
    it('makes expected calls', () => {
      spyOn(component, 'updateLoggedInStatus').and.callThrough();
      component.listenForLoginEvents();
      expect(component.updateLoggedInStatus).toHaveBeenCalled();
    });
  });
  describe('logout', () => {
    it('makes expected calls', () => {
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'signOut').and.callThrough();
      component.logout();
      expect(authServiceStub.signOut).toHaveBeenCalled();
    });
  });
  describe('openTutorial', () => {
    it('makes expected calls', () => {
      const menuControllerStub: MenuController = fixture.debugElement.injector.get(
        MenuController
      );
      const navControllerStub: NavController = fixture.debugElement.injector.get(
        NavController
      );
      const storageStub: Storage = fixture.debugElement.injector.get(Storage);
      spyOn(menuControllerStub, 'enable').and.callThrough();
      spyOn(navControllerStub, 'navigateForward').and.callThrough();
      spyOn(storageStub, 'set').and.callThrough();
      component.openTutorial();
      expect(menuControllerStub.enable).toHaveBeenCalled();
      expect(navControllerStub.navigateForward).toHaveBeenCalled();
      expect(storageStub.set).toHaveBeenCalled();
    });
  });
});
