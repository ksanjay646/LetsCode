import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FilterModel } from '../Model/filter.model';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AbstractService {

  filterModel = new FilterModel();
  filterModelReset = JSON.parse(JSON.stringify(this.filterModel));

  filterSubject: Subject<string> = new Subject();
  constructor(private restService: RestService) { }

  getContentList = (param): Observable<any> => {
    return this.restService.getContentList(param);
  }
}
