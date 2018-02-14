import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { BorrowerDemographicsService } from './borrower/borrower-demographics.service';
import { AccountService } from './account.service';
import { PaymentsService } from './payments.service';
 
@Injectable()
export class MessageService {
 
  // Observable string sources
  private message = new Subject<any>();
  private searchSsn = new Subject<string>();
  storedMessage: any;
  storedSearchSsn: string = '';
 
  // Observable string streams
  message$ = this.message.asObservable();
  searchSsn$ = this.searchSsn.asObservable();

  constructor(
    private _acctSvc: AccountService,
    private _paymentSvc: PaymentsService
  ){ }
 
  // Service message commands
  setMessage(msg: any) {
    this.storedMessage = msg;
    this.message.next(msg);
  }
  setSearchSsn(ssn: string){
    this.storedSearchSsn = ssn;
    this.searchSsn.next(ssn);
  }

  clearedStoredData(){

  }
}