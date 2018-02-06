import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BorrowerCardComponent } from './feature/borrower-card/borrower-card.component';
import { PrimaryContactFormComponent } from './feature/demographics/primary-contact-form/primary-contact-form.component';
import { HistoryComponent } from './feature/history/history.component'
import { BorrowerDemographicsService } from './services/borrower/borrower-demographics.service';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { NavigationModule } from './feature/navigation/navigation.module';
import { FeaturesModule } from './feature/features.module';
import { AccountService } from './services/account.service';
import { HistoryNotesService } from './services/history-notes.service';
import { BrowserXhr } from '@angular/http';
import { CustExtBrowserXhr } from './cust-ext-browser-xhr';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'demographics', component: PrimaryContactFormComponent },
  { path: 'history', component: HistoryComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BorrowerCardComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule,
    HttpClientModule,
    HttpModule,
    FeaturesModule,
    NavigationModule
  ],
  providers: [
    {provide: BrowserXhr, useClass:CustExtBrowserXhr},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    BorrowerDemographicsService, AccountService, HistoryNotesService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
