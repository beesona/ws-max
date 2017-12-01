import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MaskSsnPipe } from '../../../shared/mask-ssn.pipe';

@Component({
  selector: 'app-header',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
