import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { PrimaryContactFormComponent } from './demographics/primary-contact-form/primary-contact-form.component'
import { BorrowerDemographicsService } from '../services/borrower/borrower-demographics.service'
import { WidgetDirective } from '../feature/dashboard/widget.directive';
import { HistoryComponent } from './history/history.component';
import { WidgetContainerComponent } from './dashboard/widget-container.component';
import { ActivitiesComponent } from './activities/activities/activities.component';
import { PaymentHistoryComponent } from './history/payment-history/payment-history.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    AccountComponent,
    WidgetDirective,
    HistoryComponent,
    WidgetContainerComponent,
    PrimaryContactFormComponent,
    ActivitiesComponent,
    PaymentHistoryComponent,
    ActivitiesComponent
  ],
  providers: [BorrowerDemographicsService],
  entryComponents: [PrimaryContactFormComponent, AccountComponent, HistoryComponent]
})
export class FeaturesModule { }
