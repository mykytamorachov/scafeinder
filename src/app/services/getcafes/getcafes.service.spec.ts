import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { GetCafesService } from './getcafes.service';

describe('GetCafesService ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [GetCafesService]
    });
  });

  it('should be created', inject([GetCafesService], (service: GetCafesService) => {
    expect(service).toBeTruthy();
  }));
});
