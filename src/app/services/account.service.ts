import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IAccount, IAccountData } from '../../models/account';
import { AuthenticationService } from '../authentication.service';
import { IAuthorizationToken } from '../../models/authorizationToken';
import { HttpResponse } from '@angular/common/http/src/response';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class AccountService {

  private _accountUrl = 'https://dev-application.nelnet.io/v1/loans?ssn=';
  private _accountPutUrl = 'https://dev-application.nelnet.io/v1/loans/';
  private authToken: IAuthorizationToken;
  private storedSsn: string;
  private borrower = new Subject<IAccount>();
  account$ = this.account.asObservable();
  private ssnSub = Subscription;
  storedAccount: IAccount;

  constructor(private _http: HttpClient,
    private _authSvc: AuthenticationService,
    private _msgSvc: MessageService) { 
  }

  getAccounts(ssn: string): Observable<IAccount> {
    //this.ssnSub = this._msgSvc.searchSsn$.subscribe(data => this.storedSsn = data);
    this.authToken = this._authSvc.storedToken;

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authToken.accessToken
      }),
      observe: 'response'
    };

    return this._http.get<IAccount>(
      this._accountUrl + ssn, 
      { headers:new HttpHeaders({ 'Authorization': 'Bearer ' + this.authToken.accessToken }), observe: 'response' }
    ).map((response: any) => {
      let accountData: IAccount;
      if (response.body.data.length > 0){
        accountData = response.body.data[0];
        this.account.next(accountData);
        this.storedAccount = accountData;
        return accountData;
      }else{
        this.account.next(accountData);
        this.storedAccount = accountData;
        return accountData;
      }
    });
  }

  updateAccount(account: IAccount): Observable<IAccount>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authToken.accessToken
      }),
      observe: 'response'
    };

    return this._http.put<any>(
      this._accountPutUrl + account.accountId, 
      account,
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

