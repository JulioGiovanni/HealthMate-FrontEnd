import { TestBed } from '@angular/core/testing';

import { DoctoresAuthServiceService } from './doctores-auth-service.service';

describe('DoctoresAuthServiceService', () => {
  let service: DoctoresAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctoresAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
