import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { BorrowerCardComponent } from './feature/borrower-card/borrower-card.component';
import { PrimaryContactFormComponent } from './feature/demographics/primary-contact-form/primary-contact-form.component';
import { BorrowerDemographicsService } from './services/borrower/borrower-demographics.service';
import { MaskSsnPipe } from './shared/mask-ssn.pipe';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { NavigationModule } from './feature/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent,
    BorrowerCardComponent,
    PrimaryContactFormComponent,
    MaskSsnPipe,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NavigationModule
  ],
  providers: [BorrowerDemographicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
