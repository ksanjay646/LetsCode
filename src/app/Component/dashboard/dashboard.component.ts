import { Component, OnInit } from '@angular/core';
import { DashboardList, } from 'src/app/Model/dashboardList.model';
import { FilterModel } from 'src/app/Model/filter.model';
import { AbstractService } from 'src/app/Service/abstract.service';
import { UiLabelConstants } from 'src/app/ui-label.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardListObj: DashboardList;

  uiLabelConstants = UiLabelConstants;
  filterModel: FilterModel;
  constructor(private abstractService: AbstractService) {
    this.filterModel = this.abstractService.filterModel;
  }

  ngOnInit(): void {

    this.abstractService.filterSubject.subscribe(o => {
      this.getDashboardContent();
    });

    this.getDashboardContent();
  }

  getDashboardContent = () => {
    let param = '?limit=50';
    const launchSuccess = this.filterModel.successfulLaunch;
    const landingSuccess = this.filterModel.successfulLanding;
    const launchYear = this.filterModel.launchYear;

    param = launchSuccess === 'True' ? param + '&launch_success=' + launchSuccess : param;
    param = landingSuccess === 'True' ? param + '&land_success=' + landingSuccess : param;
    param = launchYear ? param + '&launch_year=' + launchYear : param;

    this.abstractService.getContentList(param).subscribe(o => {
      this.dashboardListObj = o;
    });
  }
}
