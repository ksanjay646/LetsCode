import { getTestBed, TestBed } from '@angular/core/testing';
import { RestService } from './rest.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('RestService', () => {

  let injector: TestBed;
  let service: RestService;
  // let httpMock: RestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: []
    });
    service = TestBed.inject(RestService);
    injector = getTestBed();
    // httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});


