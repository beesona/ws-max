import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IBorrower } from '../../models/borrower';
import { AuthenticationService } from '../authentication.service';
import { IAuthorizationToken } from '../../models/authorizationToken';

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
  private authToken: IAuthorizationToken;

  constructor(private _http: HttpClient, private _authSvc: AuthenticationService) { }

  setBorrowerDemographics(ssn: string){
    //this._http.get<IBorrower[]>(this._vpnUrl + ssn + this._vpnUrlGuid).catch(this.handleError).subscribe(data => {
    //before we search, check to see if the auth token is still valid or if we even have one
    if (this._authSvc.storedToken && this._authSvc.storedToken != ''){
        this.authToken = this._authSvc.storedToken;
    }else{
      this._authSvc.setToken().subscribe(token => {
          this.authToken  = token;
      });
    }

      this._http.get<IBorrower[]>(this._borrowerUrl).catch(this.handleError).subscribe(data => {
      this.storedBorrower = data;
      this.borrowerSubject.next(this.storedBorrower);  
    })
  }

  clear(){
    this.storedBorrower = <IBorrower>{};
    this.borrowerSubject.next(<IBorrower>{});  
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message)
    return Observable.throw(err.message);
  }

  trimObject(obj: any){
    
            if (!Array.isArray(obj) && typeof obj != 'object'){
                return obj;
            }
            return Object.keys(obj).reduce((acc, key) => {
                acc[key.trim()] = typeof obj[key] == 'string'? obj[key].trim() : this.trimObject(obj[key]);
                return acc;
            }, Array.isArray(obj)? []:{}); 
        }
}
