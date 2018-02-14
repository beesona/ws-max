import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  public showPymntChange:boolean = false;
  public showPymentChangeForm:any = 'Show';

  
  constructor() {
  
    }  

  //for the hide/show payment input field, changes value of payment being
  toggle() {
    this.showPymntChange = !this.showPymntChange;
    if(this.showPymntChange)  
      this.showPymentChangeForm = "Hide";
    else
      this.showPymentChangeForm = "Show";
  }

 
  ngOnInit() {

  }

}
