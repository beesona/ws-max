import { Component, OnInit } from '@angular/core';
import { IPaymentDetails, IPaymentData } from '../../../models/paymentHistory';
import { PaymentsService } from '../../../services/payments.service';
import { Subscription } from 'rxjs/Subscription';
import { BorrowerDemographicsService } from '../../../services/borrower/borrower-demographics.service';
import { IBorrower } from '../../../models/borrower';


@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})

export class PaymentHistoryComponent implements OnInit {

  paymentSubscription: Subscription;
  paymentDetails: IPaymentDetails;
  paymentData: IPaymentData;
  borrower: IBorrower;
  borrSubscription: Subscription;

  constructor(private _pymtService: PaymentsService, private _borrSvc: BorrowerDemographicsService) { }

  ngOnInit(){ 
    if (this._borrSvc.storedBorrower != undefined){
      this.borrower = this._borrSvc.storedBorrower;
      this.GetPaymentData();
    }
    this.borrSubscription = this._borrSvc.borrower$.subscribe(
      borr => {        
        if (borr) {
          this.borrower = borr;
          this.GetPaymentData();
        }else{
          //clear the history
        }
    })
  }
  
  GetPaymentData(){
  this._pymtService.getPaymentDetails(this.borrower.externalReferenceId).subscribe(
    paymentData => {
      if (paymentData){
        this.paymentData = paymentData;
        console.log(this.paymentData);
      }else{
        //clear the history
      }
    })
  }
}
