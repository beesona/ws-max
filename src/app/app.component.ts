import { Component } from '@angular/core';
import { BorrowerDemographicsService } from './services/borrower/borrower-demographics.service';
import { MessageService } from './services/message.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthenticationService } from './services/authentication.service';
import { HttpModule } from '@angular/http';

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

  constructor(private _borrowerDemographicsService: BorrowerDemographicsService, private _authSvc: AuthenticationService) { }

  //generate borrower data on load during development
  ngOnInit(): void {

    this._authSvc.setToken().subscribe(token => {
      console.log(token);
    })
    /*
    this.borrower = this._borrowerDemographicsService.getBorrowerDemographics(this.searchSsn).subscribe(
      borrower => {
        this.borrower = borrower;
        this.title = this.borrower.lastName + ', ' + this.borrower.firstName + '(' + this.borrower.ssn.substr(7,4) + ')';
        this._msgSvc.setMessage(this.borrower);
      }
    )
    */
  }
}
