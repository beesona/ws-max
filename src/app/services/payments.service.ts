import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { IBorrower, IBorrowerData } from './../models/borrower';
import { IPaymentDetails, IPaymentData } from '../models/paymentHistory';
import { AuthenticationService } from './authentication.service';
import { IAuthorizationToken } from '../models/authorizationToken';
import { HttpResponse } from '@angular/common/http/src/response';
import { MessageService } from './message.service';
import { Subscription } from 'rxjs/Subscription';
import { BorrowerDemographicsService } from './borrower/borrower-demographics.service';

@Injectable()
export class PaymentsService {

  private _paymentHistoryUrl = 'https://dev-application.nelnet.io/v1/payments?externalreferenceid=';
  private _paymentPutUrl = 'https://dev-application.nelnet.io/v1/payments';
  data: any = {};
  private authToken: IAuthorizationToken;
  private payments = new Subject<IPaymentData>();
  payments$ = this.payments.asObservable();
  private borrower = Subscription;
  storedPayments: IPaymentData;
  storedBorrower: IBorrower;
  private borrRefId: string;

  constructor(private _http: HttpClient, private _authSvc: AuthenticationService, private _borrSvc: BorrowerDemographicsService) { 
  }

  getPaymentDetails(extRefId: string): Observable<IPaymentData> {
    this.authToken = this._authSvc.storedToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authToken.accessToken
      }),
      observe: 'response'
    };

    return this._http.get<IPaymentData>(
      this._paymentHistoryUrl + extRefId, 
      { headers:new HttpHeaders({ 'Authorization': 'Bearer ' + this.authToken.accessToken }), observe: 'response' }
    ).map((response: any) => {
      let paymentData: IPaymentData;
      if (response.body.data.length > 0){
        paymentData = response.body.data[0];
        this.payments.next(paymentData);
        this.storedPayments = paymentData;
        return paymentData;
      }else{
        this.payments.next(paymentData);
        this.storedPayments = paymentData;
        return paymentData;
      }
    });
  }
}
