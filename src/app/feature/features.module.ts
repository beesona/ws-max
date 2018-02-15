import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { PaymentsComponent } from './payments/payments.component';
import { ArchwizardModule  } from 'ng2-archwizard';
import { AccordionModule } from 'ng2-accordion';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ArchwizardModule,
    AccordionModule
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
    ActivitiesComponent,
    PaymentsComponent,
    DialogComponent
  ],
  providers: [BorrowerDemographicsService],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [PrimaryContactFormComponent, AccountComponent, HistoryComponent]
})
export class FeaturesModule { }
