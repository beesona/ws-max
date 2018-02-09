import { Component, OnInit } from '@angular/core';
import { IPaymentDetails } from '../../../models/paymentHistory';
import { PaymentsService } from '../../../services/payments.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})

export class PaymentHistoryComponent implements OnInit {

  paymentSubscription: Subscription;
  paymentDetails: IPaymentDetails;

  constructor(private _pymtService: PaymentsService) { }

  ngOnInit(){ 
    this.getData();
  }

  getData(){
    this.paymentSubscription = this._pymtService.paymentHistory$.subscribe( data => { if (data) { this.paymentDetails = data; }
      }
    );
  }

   
}
