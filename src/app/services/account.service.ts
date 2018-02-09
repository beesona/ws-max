import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { IBorrower, IBorrowerData } from './../models/borrower';
import { IAccountData } from './../models/account';
import { AuthenticationService } from './authentication.service';
import { IAuthorizationToken } from './../models/authorizationToken';
import { HttpResponse } from '@angular/common/http/src/response';
import { MessageService } from './message.service';
import { Subscription } from 'rxjs/Subscription';
import { BorrowerDemographicsService } from './borrower/borrower-demographics.service';

@Injectable()
export class AccountService {

  private _accountUrl = 'https://dev-application.nelnet.io/v1/loans?externalreferenceid=';
  private _accountPutUrl = 'https://dev-application.nelnet.io/v1/loans';
  data: any = {};
  private authToken: IAuthorizationToken;
  private accounts = new Subject<IAccountData>();
  account$ = this.accounts.asObservable();
  private borrower = Subscription;
  storedAccounts: IAccountData;
  storedBorrower: IBorrower;
  private borrRefId: string;

  constructor(private _http: HttpClient,
    private _authSvc: AuthenticationService,
    private _borrSvc: BorrowerDemographicsService) {
  }

  getAccounts(extRefId: string): Observable<IAccountData> {
    this.authToken = this._authSvc.storedToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authToken.accessToken
      }),
      observe: 'response'
    };

    return this._http.get<IAccountData>(
      this._accountUrl + extRefId,
      { headers:new HttpHeaders({ 'Authorization': 'Bearer ' + this.authToken.accessToken }), observe: 'response' }
    ).map((response: any) => {
      let accountData: IAccountData;
      if (response.body.data.length > 0){
        accountData = response.body.data[0];
        this.accounts.next(accountData);
        this.storedAccounts = accountData;
        return accountData;
      }else{
        this.accounts.next(accountData);
        this.storedAccounts = accountData;
        return accountData;
      }
    });
  }

  // updateAccount(account: IAccount): Observable<IAccount>{

  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Authorization': 'Bearer ' + this.authToken.accessToken
  //     }),
  //     observe: 'response'
  //   };

  //   return this._http.put<any>(
  //     this._accountPutUrl + account.loanId,
  //     account,
  //     { headers:new HttpHeaders({ 'Authorization': 'Bearer ' + this.authToken.accessToken }), 
  //     observe: 'response' }
  //   ).map((response: any) => {
  //     let ret: any;
  //     if (response.body.data.length > 0){
  //       ret = response.body.data[0];
  //       return ret;
  //     }else{
  //       return ret;
  //     }
  //   });    
  // }
}

