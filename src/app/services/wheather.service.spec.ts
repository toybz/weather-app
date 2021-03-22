import { TestBed } from '@angular/core/testing';

import { WheatherService } from './wheather.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('WheatherService', () => {
  let service: WheatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WheatherService]
    });
    service = TestBed.inject(WheatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
