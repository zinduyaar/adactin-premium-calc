import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PremiumService } from './premium.service';

describe('PremiumService', () => {
  let service: PremiumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PremiumService);
  });

  it('should be created', inject([HttpTestingController, PremiumService], (fakeHttp: HttpTestingController) => {
    expect(service).toBeTruthy();
  }));
});
