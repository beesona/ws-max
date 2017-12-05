import { Component } from '@angular/core';
import { BorrowerDemographicsService } from './services/borrower/borrower-demographics.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'Workspace 2.0';
  searchSsn: string = '';
  borrower: any;

  constructor(private _borrowerDemographicsService: BorrowerDemographicsService,
  private _msgSvc: MessageService) { }

  //generate borrower data on load during development
  ngOnInit(): void {
    this.borrower = this._borrowerDemographicsService.getBorrowerDemographics(this.searchSsn).subscribe(
      borrower => {
        this.borrower = borrower;
        this.title = this.borrower.lastName + ', ' + this.borrower.firstName + '(' + this.borrower.ssn.substr(7,4) + ')';
        this._msgSvc.setMessage(this.borrower);
      }
    )
  }

  search(): void {
    this.borrower = this._borrowerDemographicsService.getBorrowerDemographics(this.searchSsn).subscribe(
      borrower => {
        this.borrower = borrower;
        this.title = this.borrower.lastName + ', ' + this.borrower.firstName + '(' + this.borrower.ssn.substr(7,4) + ')';
      }
    )
  }

}
