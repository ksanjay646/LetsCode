

import { getTestBed, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, } from '@angular/common/http/testing';
import { AbstractService } from './abstract.service';


describe('AbstractService', () => {

  let injector: TestBed;
  let service: AbstractService;
  // let httpMock: AbstractService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: []
    });
    service = TestBed.inject(AbstractService);
    injector = getTestBed();
    // httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});



