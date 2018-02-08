import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  _account: string;
  get account(): string {
      this._account = value;
  }
  
  @Input('account')
  set account(value:string){
      this.account = value;
  }

  //vape details. this will later be provided by a service
  vape = false;

  //interaction details. this will later be provided by a service
  callType: string = 'INBOUND CALL';
  callerName: string = 'ADAM BEESON';

  constructor() { }

  ngOnInit(): void {
    this.vape = true;
  }

}
