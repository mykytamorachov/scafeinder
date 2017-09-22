import { TestBed, inject } from '@angular/core/testing';

import { FilterService } from './filter.service';
import { GetCafesService } from './getcafes/getcafes.service';
import { HttpModule } from '@angular/http';

describe('FilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [FilterService, GetCafesService]
    });
  });

  it('should be created', inject([FilterService], (service: FilterService) => {
    expect(service).toBeTruthy();
  }));
});
