import { TestBed, inject } from '@angular/core/testing';

import { HomebuilderService } from './homebuilder.service';

describe('HomebuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomebuilderService]
    });
  });

  it('should be created', inject([HomebuilderService], (service: HomebuilderService) => {
    expect(service).toBeTruthy();
  }));
});
