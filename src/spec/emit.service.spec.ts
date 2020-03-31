import { TestBed } from '@angular/core/testing';
import { EmitService } from '../app/core/service/emit.service';
import { } from 'jasmine';


describe('EmitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmitService = TestBed.get(EmitService);
    expect(service).toBeTruthy();
  });
});
