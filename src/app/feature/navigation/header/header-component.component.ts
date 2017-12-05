import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { BorrowerDemographicsService } from '../../../services/borrower/borrower-demographics.service';
import { AccountService } from '../../../services/account.service'
import { MessageService } from '../../../services/message.service'
import { MaskSsnPipe } from '../../../shared/mask-ssn.pipe';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBorrower } from '../../../models/borrower';
import { IAccount } from '../../../models/account'

@Component({
  selector: 'app-header',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponent implements OnInit {

  searchSsnEntry: FormControl;
  searchSsnForm: FormGroup;
  borrowerSubscription: Subscription;
  accountSubscription: Subscription;
  searchSsn: string = '031700386';
  //properties
  _borrower: IBorrower;
  get borrower(): IBorrower {
      return this._borrower;
  }
  set borrower(value:IBorrower){
      this._borrower = value;
  } 
  _accounts: IAccount;
  get accounts(): IAccount {
      return this._accounts;
  }
  set accounts(value:IAccount){
      this._accounts = value;
  } 

  constructor(
    private _borrSvc: BorrowerDemographicsService, 
    private _acctSvc: AccountService,
    private _msgSvc: MessageService
  ) { }

  ngOnInit() {
    this.searchSsnEntry = new FormControl(this.searchSsn, [Validators.minLength(9), Validators.maxLength(9)]);
    this.searchSsnForm = new FormGroup({
      searchSsn: this.searchSsnEntry
    })
  }

  search(formValue: any): void {
    //borrower data
    this._msgSvc.setSearchSsn(formValue.searchSsn);
    this.borrowerSubscription = this._borrSvc.borrower$.subscribe(
      borr => {        
        this.borrower = borr;
      })
    this._borrSvc.setBorrowerDemographics(formValue.searchSsn);
    //groups and loans data
    /*
    this.accountSubscription = this._acctSvc.groupsAndLoans$.subscribe(
      accts => {        
        this.accounts = accts;
      })
    this._acctSvc.setGroupsAndLoans(formValue.searchSsn);
    */
  }
}
