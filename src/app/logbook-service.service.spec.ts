import { TestBed } from '@angular/core/testing';

import { LogbookServiceService } from './logbook-service.service';

describe('LogbookServiceService', () => {
  let service: LogbookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogbookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
