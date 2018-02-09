import { Component, OnInit, Input } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { HistoryNotesService } from '../../services/history-notes.service';
import { PaymentsService } from '../../services/payments.service';
import { MessageService } from '../../services/message.service';
import { IHistoryNote } from '../../models/historyNote';
import { IPaymentDetails, IPaymentData } from '../../models/paymentHistory';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {

  @Input() data: any;
  historyNotes: IHistoryNote[];
  subscription: Subscription;
  ssnSubscription: Subscription;
  paymentSubscription: Subscription;
  constructor(private _histNoteSvc: HistoryNotesService,
  private _msgSvc: MessageService, private _pymtService: PaymentsService) { }

  ngOnInit() {

    //this._pymtService.getPaymentDetails();

    if (this._histNoteSvc.storedHistoryNotes != undefined){
      this.historyNotes = this._histNoteSvc.storedHistoryNotes;
    }else{
      if (!!this._msgSvc.storedSearchSsn){
        this._histNoteSvc.setHistoryNotes(this._msgSvc.storedSearchSsn);
      }
    } 
    this.subscription = this._histNoteSvc.historyNotes$.subscribe(
      notes => {        
        if (notes) {
          this.historyNotes = notes;
        }
      })
    this.ssnSubscription = this._msgSvc.searchSsn$.subscribe(
      ssn => {
        if (!!this._msgSvc.storedSearchSsn){
          this._histNoteSvc.setHistoryNotes(this._msgSvc.storedSearchSsn);
        }
      }
    )
  }

}
