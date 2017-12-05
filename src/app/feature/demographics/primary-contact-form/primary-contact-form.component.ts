import { Component, OnInit, Input } from '@angular/core';
import { BorrowerDemographicsService } from '../../../services/borrower/borrower-demographics.service';
import { MessageService } from '../../../services/message.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription }   from 'rxjs/Subscription';
import { IAddress } from '../../../models/borrower';

@Component({
  selector: 'app-primary-contact-form',
  templateUrl: './primary-contact-form.component.html',
  styleUrls: ['./primary-contact-form.component.css']
})
export class PrimaryContactFormComponent implements OnInit {
  

  addresses: IAddress[];
  address: IAddress;
  phone: any;
  email: any;
  addressLine1: FormControl;
  addressLine2: FormControl;
  city: FormControl;
  state: FormControl;
  zip: FormControl;
  demographicsForm: FormGroup;
  subscription: Subscription;

  constructor(private _borrSvc: BorrowerDemographicsService, private _msgSvc: MessageService) { }


  ngOnInit() {
    if (this._borrSvc.storedBorrower != undefined){
      this.addresses = this._borrSvc.storedBorrower.Addresses;
      this.address = this.addresses.find(x => x.Priority === 0);
    } 
    this.subscription = this._borrSvc.borrower$.subscribe(
      borr => {        
        if (borr.Addresses && borr.Addresses.length > 0) {
          this.addresses = borr.Addresses;
          this.address = this.addresses.find(x => x.Priority === 0);
        }
      })

    this.addressLine1 = new FormControl(this.address.AddressLine1);
    this.addressLine2 = new FormControl(this.address.AddressLine1);
    this.city = new FormControl(this.address.City);
    this.state = new FormControl(this.address.State);
    this.zip = new FormControl(this.address.Zip);
    this.demographicsForm = new FormGroup({
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine1,
      city: this.city,
      state: this.state,
      zip: this.zip,
    })
  }

  saveDemographics(demographicsForm: FormGroup) {
    console.log(demographicsForm);
  }
}
