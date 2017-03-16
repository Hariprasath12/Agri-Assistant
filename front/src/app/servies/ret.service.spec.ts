/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RetService } from './ret.service';

describe('RetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetService]
    });
  });

  it('should ...', inject([RetService], (service: RetService) => {
    expect(service).toBeTruthy();
  }));
});
