import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { BookingService } from './booking.service';

describe('BookingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [BookingService]
    });
  });

  it('should be created', inject([BookingService], (service: BookingService) => {
    expect(service).toBeTruthy();
  }));
});
