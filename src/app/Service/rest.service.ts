import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RestService {

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
  constructor(private http: HttpClient) { }

  getContentList = (param): Observable<any> => {
    return this.http.get(`https://api.spaceXdata.com/v3/launches${param}`).pipe(
      map(this.extractData));
  }

}
