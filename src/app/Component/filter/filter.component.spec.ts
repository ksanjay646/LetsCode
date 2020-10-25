import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AbstractService } from 'src/app/Service/abstract.service';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FilterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('test for getFilterYear', inject([AbstractService], (abstract: AbstractService) => {
    const val = 'string';
    abstract.filterSubject.next('text');
    component.getFilterYear(val);
    expect(abstract.filterModel.launchYear).toEqual(val);
    abstract.filterSubject.subscribe(o => {
      expect(o).toEqual('text');
    });
  }));

  it('test for getFilterSuccessfulLaunch', inject([AbstractService], (abstract: AbstractService) => {
    const val = 'string';
    abstract.filterSubject.next('text');
    component.getFilterSuccessfulLaunch(val);
    expect(abstract.filterModel.successfulLaunch).toEqual(val);
    abstract.filterSubject.subscribe(o => {
      expect(o).toEqual('text');
    });
  }));

  it('test for successfulLanding', inject([AbstractService], (abstract: AbstractService) => {
    const val = 'string';
    abstract.filterSubject.next('text');
    component.getFilterSuccessfulLanding(val);
    expect(abstract.filterModel.successfulLanding).toEqual(val);
    abstract.filterSubject.subscribe(o => {
      expect(o).toEqual('text');
    });
  }));

});

