import { Component, OnInit, Input } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { IAccountData, IAccountDetails, ILender } from './../../models/account';
import { AccountService } from '../../services/account.service';
import { Subscription }   from 'rxjs/Subscription';
import { BorrowerDemographicsService } from './../../services/borrower/borrower-demographics.service';
import { IBorrower } from './../../models/borrower';

@Component({
  selector: 'app-accounts',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  @Input() data: any;
  @Input() isWidget: true;
  @Input() borrower: IBorrower;
  accountSubscription: Subscription;
  accountDetails: IAccountDetails;
  accountData: IAccountData;
  borrSubscription: Subscription;

  constructor(private _acctService: AccountService, private _borrSvc: BorrowerDemographicsService) { }

  ngOnInit() {
    if (this._borrSvc.storedBorrower != undefined){
      this.borrower = this._borrSvc.storedBorrower;
      this.GetAccountData();
    }
    this.borrSubscription = this._borrSvc.borrower$.subscribe(
      borr => {        
        if (borr) {
          this.borrower = borr;
          this.GetAccountData();
        }else{
          //clear the history
        }
    })
  }

  GetAccountData(): void {
  this._acctService.getAccounts(this.borrower.externalReferenceId).subscribe(
    accountData => {
      if (accountData){
        this.accountData = accountData;
      }else{
        //clear the history
      }
    })
  }
}
