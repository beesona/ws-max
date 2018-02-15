import { Component, OnInit, Input } from '@angular/core';
import { BorrowerDemographicsService } from '../../../services/borrower/borrower-demographics.service';
import { MessageService } from '../../../services/message.service'
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription }   from 'rxjs/Subscription';
import { IAddress, IBorrower, IEmailAddress, IPhone, Address, Email, Phone } from '../../../models/borrower';
import { Subject } from 'rxjs/Subject';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
    private _msgSvc: MessageService, private _toastr: ToastsManager) {
    this.SetDemographics()
    }

  ngOnInit() {
    if (this._borrSvc.storedBorrower != undefined){
      this.borrower = this._borrSvc.storedBorrower;
      this.SetDemographics();
    }
    this.borrSubscription = this._borrSvc.borrower$.subscribe(
      borr => {        
        if (borr) {
          this.borrower = borr;
          this.SetDemographics();
        }else{
          this.ClearFields();
        }
    })
  }

  ClearFields(){
  }

  SetDemographics(){
    if (this.borrower){
      this.primaryAddress = this.borrower.addresses && this.borrower.addresses.length > 0 && this.borrower.addresses[0] != null ? this.FindPrimaryAddress(this.borrower.addresses) : new Address;
      this.primaryPhone = this.borrower.phones && this.borrower.phones.length > 0 && this.borrower.phones[0] != null ? this.FindPrimaryPhone(this.borrower.phones) : new Phone;
      this.primaryEmail = this.borrower.emailAddresses && this.borrower.emailAddresses.length > 0 && this.borrower.emailAddresses[0] != null ? this.FindPrimaryEmail(this.borrower.emailAddresses) : new Email;
    }else{
      this.primaryAddress = new Address;
      this.primaryPhone = new Phone;
      this.primaryEmail = new Email;
    }
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

  makePrimary(address: IAddress){
    this.borrower.addresses.forEach(add => {
      if (add.type == 'primary'){
        add.type = '';
      }
    })
    address.type = 'primary';
    this.primaryAddress = address;
    this.borrower.addresses.splice(this.borrower.addresses.indexOf(address), 1);
    this.borrower.addresses.unshift(address);
    this.saveDemo();
  }

  makePrimaryPhone(phone: IPhone){
    this.borrower.phones.forEach(phone => {
      if (phone.type == 'primary'){
        phone.type = '';
      }
    })
    phone.type = 'primary';
    this.primaryPhone = phone;
    this.borrower.phones.splice(this.borrower.phones.indexOf(phone), 1);
    this.borrower.phones.unshift(phone);
    this.saveDemo();
  }

  makePrimaryEmail(email: IEmailAddress){
    this.borrower.emailAddresses.forEach(email => {
      if (email.type == 'primary'){
        email.type = '';
      }
    })
    email.type = 'primary';
    this.primaryEmail = email;
    this.borrower.emailAddresses.splice(this.borrower.emailAddresses.indexOf(email), 1);
    this.borrower.emailAddresses.unshift(email);
    this.saveDemo();
  }

  saveDemographics() {
    let addressExists = this.borrower.addresses.indexOf(this.primaryAddress);
    let phoneExists = this.borrower.phones.indexOf(this.primaryPhone);
    let emailExists = this.borrower.emailAddresses.indexOf(this.primaryEmail);
    if (addressExists < 0){
      this.borrower.addresses.unshift(this.primaryAddress);  
    }
    if (phoneExists < 0){
      this.borrower.phones.unshift(this.primaryPhone);  
    }
    if (emailExists < 0){
      this.borrower.emailAddresses.unshift(this.primaryEmail);  
    }
    let retData;
    //check for null information
    
    this._borrSvc.updateBorrower(this.borrower)
    .subscribe(data => retData = data);
    console.log(retData);
    this._toastr.success("Demographic Info Saved.", 'Success!', {toastLife: 3000});
  }

  saveDemo(): void{
    //do some address validation here
    let retData;
    this._borrSvc.updateBorrower(this.borrower)
    .subscribe(data => retData = data);
    this._toastr.success("Demographic Info Saved.", 'Success!', {toastLife: 3000});
  }

  addAddress(): void {
    let newAddress = new Address();
    if (this.borrower.addresses.length <= 0){
      newAddress.type = 'primary';
    }
    this.borrower.addresses.push(newAddress);
  }

  addPhone(): void {
    let newPhone = new Phone();
    if (this.borrower.addresses.length <= 0){
      newPhone.type = 'primary';
    }
    this.borrower.phones.push(newPhone);
  }

  addEmail(): void {
    let newEmail = new Email();
    if (this.borrower.emailAddresses.length <= 0){
      newEmail.type = 'primary';
    }
    this.borrower.emailAddresses.push(newEmail);
  }

  deleteAddress(address: IAddress){
    this.borrower.addresses.splice(this.borrower.addresses.indexOf(address), 1);
    this.saveDemo();
  }
  deletePhone(phone: IPhone){
    this.borrower.phones.splice(this.borrower.phones.indexOf(phone), 1);
    this.saveDemo();
  }
  deleteEmail(email: IEmailAddress){
    this.borrower.emailAddresses.splice(this.borrower.emailAddresses.indexOf(email), 1);
    this.saveDemo();
  }
}
