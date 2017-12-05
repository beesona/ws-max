import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IBorrower } from '../../models/borrower';

@Injectable()
export class BorrowerDemographicsService {

  // Observable string sources
  private borrowerSubject = new Subject<IBorrower>();  
  // Observable string streams
  borrower$ = this.borrowerSubject.asObservable();
  storedBorrower: IBorrower;

  private _borrowerUrl = './api/borrower/borrower.json';
  private _vpnUrl: string = 'http://dev.intsvc.nelnet.net:4106/api/workspace/v1/borrowersummarybyssn/14/1/US//abeeson/';
  private _vpnUrlGuid: string = '/46ec4d0a-a23a-4415-8d69-5c1c422aad6a';

  constructor(private _http: HttpClient) { }

  setBorrowerDemographics(ssn: string){
    this._http.get<IBorrower[]>(this._vpnUrl + ssn + this._vpnUrlGuid).catch(this.handleError).subscribe(data => {
      this.storedBorrower = data;
      this.borrowerSubject.next(data);  
    })
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message)
    return Observable.throw(err.message);
  }
}
