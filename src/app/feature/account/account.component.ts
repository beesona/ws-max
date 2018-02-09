import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from './../../services/message.service'
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription }   from 'rxjs/Subscription';
import { IAccount, IBorrower, ILender } from './../../models/account';
import { Subject } from 'rxjs/Subject';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [MessageService]
})
export class AccountComponent implements OnInit {
  
  @Input() account: IAccount;
  @Input() isWidget: true;
  private searchSsn: string = '';
  borrowers: IBorrower[];
  lender: ILender;
  borrSubscription: Subscription;
  msgSvcSubscription: Subscription;

  constructor(private _acctSvc: AccountService,
    private _msgSvc: MessageService) {
    // this.SetDemographics()
    }

  ngOnInit() {
    // if (this._borrSvc.storedBorrower != undefined){
    //   this.borrower = this._borrSvc.storedBorrower;
    //   this.SetDemographics();
    // }
    // this.borrSubscription = this._borrSvc.borrower$.subscribe(
    //   borr => {        
    //     if (borr) {
    //       this.borrower = borr;
    //       this.SetDemographics();
    //     }else{
    //       this.ClearFields();
    //     }
    // })
  }
}
