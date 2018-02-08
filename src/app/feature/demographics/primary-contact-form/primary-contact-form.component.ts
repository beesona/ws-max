import { Component, OnInit, Input } from '@angular/core';
import { BorrowerDemographicsService } from '../../../services/borrower/borrower-demographics.service';
import { MessageService } from '../../../services/message.service'
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription }   from 'rxjs/Subscription';
import { IAddress, IBorrower, IEmailAddress, IPhone } from '../../../models/borrower';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-primary-contact-form',
  templateUrl: './primary-contact-form.component.html',
  styleUrls: ['./primary-contact-form.component.css'],
  providers: [MessageService]
})
export class PrimaryContactFormComponent implements OnInit {
  
  @Input() borrower: IBorrower;
  @Input() isWidget: true;
  private searchSsn: string = '';
  addresses: IAddress[];
  primaryAddress: IAddress;
  primaryPhone: IPhone;
  primaryEmail: IEmailAddress;
  phone: any;
  email: any;
  borrSubscription: Subscription;
  msgSvcSubscription: Subscription;

  constructor(private _borrSvc: BorrowerDemographicsService,
    private _msgSvc: MessageService) {
      this.ClearFields();
    }

  ngOnInit() {
    if (this._borrSvc.storedBorrower != undefined){
      this.borrower = this._borrSvc.storedBorrower;
      this.SetDemographics(this.borrower);
    }
    this.borrSubscription = this._borrSvc.borrower$.subscribe(
      borr => {        
        if (borr) {
          this.borrower = borr;
          this.SetDemographics(this.borrower);
        }else{
          this.ClearFields();
        }
    })
  }

  ClearFields(){
  }

  SetDemographics(borr: IBorrower){
    this.addresses = borr.addresses;
    this.primaryAddress = this.FindPrimaryAddress(borr.addresses);
    this.primaryPhone = this.FindPrimaryPhone(borr.phones);
    this.primaryEmail = this.FindPrimaryEmail(borr.emailAddresses);
  }

  FindPrimaryAddress(address: IAddress[]): IAddress{

    return address[0];
  }

  FindPrimaryPhone(phones: IPhone[]): IPhone{

    //phones.sort((x, y) => { return x.Priority - y.Priority; });
    return phones[0];
  }

  FindPrimaryEmail(emails: IEmailAddress[]): IEmailAddress{
    
    //emails.sort((x, y) => { return x.Priority - y.Priority; });
    return emails[0];
  }

  saveDemographics(demographicsForm: FormGroup) {
    let retData;
    this._borrSvc.updateBorrower(this.borrower)
    .subscribe(data => retData = data);
    console.log(retData);
  }
}
