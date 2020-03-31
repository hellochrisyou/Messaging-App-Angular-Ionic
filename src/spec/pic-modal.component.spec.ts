import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PicModalPage } from '../app/shared/component/profile/pic-modal/pic-modal.component';
import { ImageService } from '../app/core/service/image.service';
import { } from 'jasmine';

describe('PicModalPage', () => {
  let component: PicModalPage;
  let fixture: ComponentFixture<PicModalPage>;
  beforeEach(() => {
    const navParamsStub = () => ({ get: string => ({}) });
    const modalControllerStub = () => ({ dismiss: object => ({}) });
    const imageServiceStub = () => ({
      getUserImageList: email => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PicModalPage],
      providers: [
        { provide: NavParams, useFactory: navParamsStub },
        { provide: ModalController, useFactory: modalControllerStub },
        { provide: ImageService, useFactory: imageServiceStub }
      ]
    });
    fixture = TestBed.createComponent(PicModalPage);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('tabs defaults to: []', () => {
    expect(component.tabs).toEqual([]);
  });
  it('tabCounter defaults to: 1', () => {
    expect(component.tabCounter).toEqual(1);
  });
  describe('closeModal', () => {
    it('makes expected calls', () => {
      const modalControllerStub: ModalController = fixture.debugElement.injector.get(
        ModalController
      );
      spyOn(modalControllerStub, 'dismiss').and.callThrough();
      component.closeModal();
      expect(modalControllerStub.dismiss).toHaveBeenCalled();
    });
  });
});
