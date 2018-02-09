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

  private _paymentHistoryUrl = 'https://dev-application.nelnet.io/v1/payments?externalreferenceid=';
  private _paymentPutUrl = 'https://dev-application.nelnet.io/v1/payments';
  data: any = {};
  private authToken: IAuthorizationToken;
  private paymentHistory = new Subject<IPaymentDetails>();
  paymentHistory$ = this.paymentHistory.asObservable();
  private externalReferenceIdSub = Subscription;
  storedPaymentHistory: IPaymentDetails;

  constructor(private _http: HttpClient, private _authSvc: AuthenticationService) { 
    this.getData();
    this.getPaymentDetails();
  }
  
  getData(){
    return this._http.get(this._paymentPutUrl)
      .map((res: Response)=> res.json())
  }

  getPaymentDetails(){
    this.authToken = this._authSvc.storedToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authToken.accessToken
      }),
      observe: 'response'};

      this.getData().subscribe(data => {
        console.log(data);
        this.data = data;
      });

      return this._http.get<IPaymentDetails>(
        this._paymentHistoryUrl,
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

 /* private _paymentHistoryUrl = 'https://dev-application.nelnet.io/v1/payments?externalreferenceid=';
  private _paymentPutUrl = 'https://dev-application.nelnet.io/v1/payments';
  private authToken: IAuthorizationToken;
  private storedExternalReferenceId: string;
  private paymentHistory = new Subject<IPaymentDetails>();
  paymentHistory$ = this.paymentHistory.asObservable();
  private externalReferenceIdSub = Subscription;
  storedPaymentHistory: IPaymentDetails;

  constructor(private _http: HttpClient, private _authSvc: AuthenticationService) { }

  getPaymentDetails(externalReferenceId: string): Observable<IPaymentDetails> {
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
  }*/
}
