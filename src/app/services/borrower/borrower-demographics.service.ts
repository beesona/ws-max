import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IBorrower } from '../../models/borrower';

@Injectable()
export class BorrowerDemographicsService {

  private _borrowerUrl = './api/borrower/borrower.json';
  constructor(private _http: HttpClient) { }

  getBorrowerDemographics(ssn: string): Observable<any>{
    return this._http.get<any[]>(this._borrowerUrl + '').catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message)
    return Observable.throw(err.message);
  }
}
