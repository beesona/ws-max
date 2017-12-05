import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IAccount } from '../models/account'

@Injectable()
export class AccountService {

    // Observable string sources
    private groupsAndLoansSubject = new Subject<IAccount>();  
    // Observable string streams
    groupsAndLoans$ = this.groupsAndLoansSubject.asObservable();
    storedGroupsAndLoans: IAccount;
  
    private _accountsrUrl = './api/accounts/groupsandloans.json';
    private _vpnUrl: string = 'http://dev.intsvc.nelnet.net:4106/api/workspace/v1/borrowergroupsandloans/14/1/us/abeeson/';
    private _vpnUrlGuid: string = '?requestid=15874da7-25c8-42a3-87cf-7ea963d3ce31';

    constructor(private _http: HttpClient) { }

    setGroupsAndLoans(ssn: string){
      this._http.get<IAccount[]>(this._vpnUrl + ssn + this._vpnUrlGuid).catch(this.handleError).subscribe(data => {
        this.storedGroupsAndLoans = data;
        this.groupsAndLoansSubject.next(data);  
      })
    }

    clear(){
      this.storedGroupsAndLoans = <IAccount>{};
      this.groupsAndLoansSubject.next(<IAccount>{});  
    }
  
    private handleError(err: HttpErrorResponse){
      console.log(err.message)
      return Observable.throw(err.message);
    }

}
