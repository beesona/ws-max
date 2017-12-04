import { Component, OnInit, Input } from '@angular/core';
import { BorrowerDemographicsService } from '../../../services/borrower/borrower-demographics.service';
@Component({
  selector: 'app-primary-contact-form',
  templateUrl: './primary-contact-form.component.html',
  styleUrls: ['./primary-contact-form.component.css']
})
export class PrimaryContactFormComponent implements OnInit {
  
  borrower: any;
  constructor(private _borrowerDemographicsService: BorrowerDemographicsService) { }

  ngOnInit() {
    this.borrower = this._borrowerDemographicsService.getBorrowerDemographics("321654987").subscribe(
      borrower => {
        this.borrower = borrower;
      }
    )
  }
}
