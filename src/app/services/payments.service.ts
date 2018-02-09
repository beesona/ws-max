import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IPaymentDetails, IPaymentData } from '../models/paymentHistory';
import { AuthenticationService } from './authentication.service';
import { IAuthorizationToken } from '../models/authorizationToken';
import { HttpResponse } from '@angular/common/http/src/response';
import { MessageService } from './message.service';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class PaymentsService {

  private _paymentHistoryUrl = 'https://dev-application.nelnet.io/v1/payments';
 // private _paymentPutUrl = 'https://dev-application.nelnet.io/v1/borrowers/';
  private authToken: IAuthorizationToken;
  private storedSsn: string;
  private paymentHistory = new Subject<IPaymentDetails>();
  paymentHistory$ = this.paymentHistory.asObservable();
  private externalReferenceIdSub = Subscription;
  storedPaymentHistory: IPaymentDetails;

  constructor(private _http: HttpClient,
    private _authSvc: AuthenticationService,
    private _msgSvc: MessageService) { 
  }

  getPaymentDetails(externalReferenceId: string): Observable<IPaymentDetails> {
    //this.ssnSub = this._msgSvc.searchSsn$.subscribe(data => this.storedSsn = data);
    debugger;
    this.authToken = this._authSvc.storedToken;

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authToken.accessToken
      }),
      observe: 'response'
    };

    return this._http.get<IPaymentDetails>(
      this._paymentHistoryUrl + externalReferenceId,
      { headers:new HttpHeaders({ 'Authorization': 'Bearer ' + this.authToken.accessToken }), observe: 'response' }
    ).map((response: any) => {
      let paymentData: IPaymentDetails;
      if (response.body.data.length > 0){
        paymentData = response.body.data[0];
        this.paymentHistory.next(paymentData);
        this.storedPaymentHistory = paymentData;
        return paymentData;
      }else{
        this.paymentHistory.next(paymentData);
        this.storedPaymentHistory = paymentData;
        return paymentData;
      }
    });
  }
}
