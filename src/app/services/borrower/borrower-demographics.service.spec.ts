import { TestBed, inject } from '@angular/core/testing';

import { BorrowerDemographicsService } from './borrower-demographics.service';

describe('BorrowerDemographicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BorrowerDemographicsService]
    });
  });

  it('should be created', inject([BorrowerDemographicsService], (service: BorrowerDemographicsService) => {
    expect(service).toBeTruthy();
  }));
});
