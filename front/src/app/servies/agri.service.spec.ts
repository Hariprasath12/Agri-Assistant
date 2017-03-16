/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AgriService } from './agri.service';

describe('AgriService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgriService]
    });
  });

  it('should ...', inject([AgriService], (service: AgriService) => {
    expect(service).toBeTruthy();
  }));
});
