import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { BorrowerDemographicsService } from '../../../services/borrower/borrower-demographics.service';
import { MaskSsnPipe } from '../../../shared/mask-ssn.pipe';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBorrower } from '../../../models/borrower';

@Component({
  selector: 'app-header',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponent implements OnInit {

  borrowerSubscription: Subscription;
  searchSsn: string = '031700386';
  _borrower: IBorrower;
  searchSsnEntry: FormControl;
  searchSsnForm: FormGroup;
  get borrower(): IBorrower {
      return this._borrower;
  }

  set borrower(value:IBorrower){
      this._borrower = value;
  }  

  constructor(private _borrSvc: BorrowerDemographicsService) { }

  ngOnInit() {
    this.searchSsnEntry = new FormControl(this.searchSsn, [Validators.minLength(9), Validators.maxLength(9)]);
    this.searchSsnForm = new FormGroup({
      searchSsn: this.searchSsnEntry
    })
  }

  search(formValue: any): void {
    this.borrowerSubscription = this._borrSvc.borrower$.subscribe(
      borr => {        
        this.borrower = borr;
      })
    this._borrSvc.setBorrowerDemographics(formValue.searchSsn);
  }
}
