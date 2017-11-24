import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-borrower-card',
  templateUrl: './borrower-card.component.html',
  styleUrls: ['./borrower-card.component.css']
})
export class BorrowerCardComponent implements OnInit {

    _borrower: string;
    get borrower(): string {
        return this._borrower;
    }

    @Input('borrower')
    set borrower(value:string){
        this._borrower = value;
        //determine primary address, phone, and email
        console.log('setting borrower...')
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
