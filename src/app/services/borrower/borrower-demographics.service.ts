import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IBorrower, IBorrowerData, Borrower } from '../../models/borrower';
import { AuthenticationService } from '../authentication.service';
import { IAuthorizationToken } from '../../models/authorizationToken';
import { HttpResponse } from '@angular/common/http/src/response';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class BorrowerDemographicsService {

  private _borrowerUrl = 'https://dev-application.nelnet.io/v1/borrowers?ssn=';
  private _borrowerPutUrl = 'https://dev-application.nelnet.io/v1/borrowers/';
  private authToken: IAuthorizationToken;
  private storedSsn: string;
  private borrower = new Subject<IBorrower>();
  borrower$ = this.borrower.asObservable();
  private ssnSub = Subscription;
  storedBorrower: IBorrower;

  constructor(private _http: HttpClient,
    private _authSvc: AuthenticationService) { 
  }

  getBorrowerDemographics(ssn: string): Observable<IBorrower> {
    this.borrower.next(new Borrower);
    this.storedBorrower = new Borrower;
    this.authToken = this._authSvc.storedToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authToken.accessToken
      }),
      observe: 'response'
    };

    return this._http.get<IBorrower>(
      this._borrowerUrl + ssn, 
      { headers:new HttpHeaders({ 'Authorization': 'Bearer ' + this.authToken.accessToken }), observe: 'response' }
    ).map((response: any) => {
      let borrowerData: IBorrower;
      if (response.body.data.length > 0){
        borrowerData = response.body.data[0];
        this.borrower.next(borrowerData);
        this.storedBorrower = borrowerData;
        return borrowerData;
      }else{
        //we errored out.
        this.borrower.next(new Borrower);
        this.storedBorrower = new Borrower;
        return new Borrower;
      }
    });
  }

  updateBorrower(borrower: IBorrower): Observable<IBorrower>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authToken.accessToken
      }),
      observe: 'response'
    };

    return this._http.put<any>(      
      this._borrowerPutUrl + borrower.borrowerId, 
      borrower,
      { headers:new HttpHeaders({ 'Authorization': 'Bearer ' + this.authToken.accessToken }), 
      observe: 'response' }
    ).map((response: any) => {
      let ret: any;
      if (response.body.data.length > 0){
        ret = response.body.data[0];
        return ret;
      }else{
        return ret;
      }
    });    
  }
}
