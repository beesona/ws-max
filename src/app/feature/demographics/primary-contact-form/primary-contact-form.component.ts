import { Component, OnInit, Input } from '@angular/core';
import { BorrowerDemographicsService } from '../../../services/borrower/borrower-demographics.service';
import { MessageService } from '../../../services/message.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-primary-contact-form',
  templateUrl: './primary-contact-form.component.html',
  styleUrls: ['./primary-contact-form.component.css']
})
export class PrimaryContactFormComponent implements OnInit {
  

  addresses: any;
  address: any;
  phone: any;
  email: any;
  constructor(private _borrSvc: BorrowerDemographicsService, private _msgSvc: MessageService) { }
  addressLine1: FormControl;
  addressLine2: FormControl;
  city: FormControl;
  state: FormControl;
  zip: FormControl;
  demographicsForm: FormGroup;
  subscription: Subscription;

  ngOnInit() {
    if (this._msgSvc.storedMessage != undefined){
      this.addresses = this._msgSvc.storedMessage.addresses;
      this.address = this.addresses.find(x => x.priority === 0);
    } 
    this.subscription = this._msgSvc.message$.subscribe(
      message => {        
        if (message.addresses && message.addresses.length > 0) {
          this.addresses = message.addresses;
        }
      })
    this.addressLine1 = new FormControl(this.address.addressLine1);
    this.addressLine2 = new FormControl(this.address.addressLine1);
    this.city = new FormControl(this.address.city);
    this.state = new FormControl(this.address.state);
    this.zip = new FormControl(this.address.zip);
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
