import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { PrimaryContactFormComponent } from './demographics/primary-contact-form/primary-contact-form.component'
import { BorrowerDemographicsService } from '../services/borrower/borrower-demographics.service'
import { WidgetDirective } from '../feature/dashboard/widget.directive';
import { HistoryComponent } from './history/history.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    AccountComponent,
    WidgetDirective,
    HistoryComponent
  ],
  providers: [BorrowerDemographicsService],
  entryComponents: [PrimaryContactFormComponent, AccountComponent, HistoryComponent]
})
export class FeaturesModule { }
