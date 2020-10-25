import { Component, OnInit } from '@angular/core';
import { FilterModel } from 'src/app/Model/filter.model';
import { AbstractService } from 'src/app/Service/abstract.service';
import { UiLabelConstants } from 'src/app/ui-label.constants';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  uiLabelConstants = UiLabelConstants;
  Years = UiLabelConstants.YEARS;
  Options = UiLabelConstants.OPTIONS;
  filterModel: FilterModel;

  constructor(private abstract: AbstractService) {
    this.filterModel = this.abstract.filterModel;
  }

  ngOnInit(): void {

  }

  getFilterYear(val) {
    this.abstract.filterModel.launchYear = val;
    this.abstract.filterSubject.next('fire');
  }

  getFilterSuccessfulLaunch(val) {
    this.abstract.filterModel.successfulLaunch = val;
    this.abstract.filterSubject.next('fire');
  }

  getFilterSuccessfulLanding(val) {
    this.abstract.filterModel.successfulLanding = val;
    this.abstract.filterSubject.next('fire');
  }



}
