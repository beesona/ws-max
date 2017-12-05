import { Component, OnInit, Input } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { AccountService } from '../../services/account.service'
import { MessageService } from '../../services/message.service'
import { IAccount, IGroup, ILoan } from '../../models/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() data: any;
  subscription: Subscription;
  account: IAccount;
  groups: IGroup[];
  loans: ILoan[];
  constructor(private _acctSvc: AccountService, 
    private _msgSvc: MessageService) { }

  ngOnInit() {
    if (this._acctSvc.storedGroupsAndLoans != undefined){
      this.account = this._acctSvc.storedGroupsAndLoans;
      this.groups = this._acctSvc.storedGroupsAndLoans.Groups;
      this.loans = this._acctSvc.storedGroupsAndLoans.Loans;
    }else{
      if (!!this._msgSvc.storedSearchSsn){
        this._acctSvc.setGroupsAndLoans(this._msgSvc.storedSearchSsn);
      }
    } 
    this.subscription = this._acctSvc.groupsAndLoans$.subscribe(
      acct => {        
        if (acct) {
          this.account = acct;
          this.groups = acct.Groups;
          this.loans = acct.Loans;
        }
      })
  }

}
