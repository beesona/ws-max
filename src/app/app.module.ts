import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BorrowerCardComponent } from './feature/borrower-card/borrower-card.component';
import { PrimaryContactFormComponent } from './feature/demographics/primary-contact-form/primary-contact-form.component';
import { BorrowerDemographicsService } from './services/borrower/borrower-demographics.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { NavigationModule } from './feature/navigation/navigation.module';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'demographics', component: PrimaryContactFormComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BorrowerCardComponent,
    PrimaryContactFormComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
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
