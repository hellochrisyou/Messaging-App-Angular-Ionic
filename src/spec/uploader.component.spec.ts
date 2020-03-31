import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { } from 'jasmine';

import { UploaderComponent } from '../app/shared/component/uploader/uploader.component';
describe('UploaderComponent', () => {
  let component: UploaderComponent;
  let fixture: ComponentFixture<UploaderComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [UploaderComponent]
    });
    fixture = TestBed.createComponent(UploaderComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('files defaults to: []', () => {
    expect(component.files).toEqual([]);
  });
});
