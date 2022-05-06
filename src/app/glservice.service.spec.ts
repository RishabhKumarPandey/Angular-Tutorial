import { TestBed } from '@angular/core/testing';

import { GlserviceService } from './glservice.service';

describe('GlserviceService', () => {
  let service: GlserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
