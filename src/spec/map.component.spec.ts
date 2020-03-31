import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { MapPage } from '../app/pages/map/map';
import { ConferenceData } from '../app/providers/conference-data';
import { } from 'jasmine';

describe('MapPage', () => {
  let component: MapPage;
  let fixture: ComponentFixture<MapPage>;
  beforeEach(() => {
    const activatedRouteStub = () => ({
      queryParams: { subscribe: f => f({}) }
    });
    const routerStub = () => ({
      getCurrentNavigation: () => ({ extras: { state: { lat: {}, lgn: {} } } })
    });
    const platformStub = () => ({});
    const conferenceDataStub = () => ({
      getMap: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MapPage],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        { provide: Platform, useFactory: platformStub },
        { provide: ConferenceData, useFactory: conferenceDataStub }
      ]
    });
    fixture = TestBed.createComponent(MapPage);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
