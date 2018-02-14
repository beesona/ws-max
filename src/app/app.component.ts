import { Component, ViewContainerRef } from '@angular/core';
import { BorrowerDemographicsService } from './services/borrower/borrower-demographics.service';
import { MessageService } from './services/message.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthenticationService } from './services/authentication.service';
import { HttpModule } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'Agent Portal';
  searchSsn: string = '';

  constructor(private _borrowerDemographicsService: BorrowerDemographicsService, 
    private _authSvc: AuthenticationService,
    public _toastr: ToastsManager,
    private vRef: ViewContainerRef) {

      this._toastr.setRootViewContainerRef(vRef);
     }

  //generate borrower data on load during development
  ngOnInit(): void {

    this._authSvc.setToken().subscribe(token => {
    
    })
  }
}
