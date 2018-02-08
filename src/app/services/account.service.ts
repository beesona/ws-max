import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IAccount, IAccountData } from '../../models/borrower';
import { AuthenticationService } from '../authentication.service';
import { IAuthorizationToken } from '../../models/authorizationToken';
import { HttpResponse } from '@angular/common/http/src/response';

@Injectable()
export class AccountService {

  private _accountUrl = 'https://dev-application.nelnet.io/v1/loans?ssn=';
  private authToken: IAuthorizationToken;

  constructor(private _http: HttpClient, private _authSvc: AuthenticationService) { 
  }

  getAccounts(ssn: string): Observable<IAccountData> {
    this.authToken = this._authSvc.storedToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authToken.accessToken
      }),
      observe: 'response'
    };

    return this._http.get<IAccountData>(
      this._accountUrl + ssn, 
      { headers:new HttpHeaders({ 'Authorization': 'Bearer ' + this.authToken.accessToken }), observe: 'response' }
    );
  }
}

