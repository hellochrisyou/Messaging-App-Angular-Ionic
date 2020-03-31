import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { TableComponent } from '../app/shared/component/table/table.component';
import { EmitService } from '../app/core/service/emit.service';
import { } from 'jasmine';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  beforeEach(() => {
    const changeDetectorRefStub = () => ({});
    const emitServiceStub = () => ({});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TableComponent],
      providers: [
        { provide: ChangeDetectorRef, useFactory: changeDetectorRefStub },
        { provide: EmitService, useFactory: emitServiceStub }
      ]
    });
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('columnIds defaults to: []', () => {
    expect(component.columnIds).toEqual([]);
  });
});
