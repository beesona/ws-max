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
  styleUrls: ['./primary-contact-form.component.css']
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
  addressLine1: FormControl;
  addressLine2: FormControl;
  city: FormControl;
  state: FormControl;
  zip: FormControl;
  demographicsForm: FormGroup;
  subscription: Subscription;
  msgSvcSubscription: Subscription;

  constructor(private _borrSvc: BorrowerDemographicsService,
    private _msgSvc: MessageService) { }

  ngOnInit() {
    this.searchSsn = this._msgSvc.storedSearchSsn != undefined ? this._msgSvc.storedSearchSsn : '';
  }

  SetDemographics(borr: IBorrower){
    this.addresses = borr.addresses;
    this.primaryAddress = this.FindPrimaryAddress(borr.addresses);
    this.primaryPhone = this.FindPrimaryPhone(borr.phones);
    this.primaryEmail = this.FindPrimaryEmail(borr.emailAddresses);

    this.addressLine1 = new FormControl(this.primaryAddress.street1);
    this.addressLine2 = new FormControl(this.primaryAddress.street2);
    this.city = new FormControl(this.primaryAddress.city);
    this.state = new FormControl(this.primaryAddress.state);
    this.zip = new FormControl(this.primaryAddress.postalCode);
    this.phone = new FormControl(this.primaryPhone.phoneNumber);
    this.email = new FormControl(this.primaryEmail.emailAddress);
    this.demographicsForm = new FormGroup({
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine1,
      city: this.city,
      state: this.state,
      zip: this.zip,
      phone: this.phone,
      email: this.email
    });
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
    console.log(demographicsForm);
  }
}
