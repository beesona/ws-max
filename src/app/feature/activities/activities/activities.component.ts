import { Component, OnInit } from '@angular/core';
import { IPaymentDetails, IPaymentData } from '../../../models/paymentHistory';
import { PaymentsService } from '../../../services/payments.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

}
