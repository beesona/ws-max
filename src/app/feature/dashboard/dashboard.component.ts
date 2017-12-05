import { Component, OnInit, Directive, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AfterViewInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { WidgetDirective } from './widget.directive';
import { WidgetComponent } from './widget.component';
import { DashboardWidget } from './dashboard-widget';
import { PrimaryContactFormComponent } from '../demographics/primary-contact-form/primary-contact-form.component'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { Subscription }   from 'rxjs/Subscription';
import { BorrowerDemographicsService } from '../../services/borrower/borrower-demographics.service';
import { IBorrower } from '../../models/borrower';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild(WidgetDirective) dbw: WidgetDirective;
  defaultDashboard: boolean = true;

  //hardcoded now, but should be returned from a dashboardLayoutService
  widgetCollection: DashboardWidget[] = [new DashboardWidget(PrimaryContactFormComponent, { Title: 'Demographics', body: 'NA'})];

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private _borrSvc: BorrowerDemographicsService) { }

  borrower: IBorrower;
  subscription: Subscription;

  ngOnInit(){
    if (this._borrSvc.storedBorrower != undefined){
      this.borrower = this._borrSvc.storedBorrower;
      if (this.borrower) {
        this.loadWidgets();
      }
    } 
    this.subscription = this._borrSvc.borrower$.subscribe(
      borr => {        
        this.borrower = borr;
        if (this.borrower) {
          this.loadWidgets();
        }
      })
  }

  ngAfterViewInit() {
    //this.loadWidgets();
  }

  loadWidgets(): void{
    let viewContainerRef = this.dbw.viewContainerRef;
    viewContainerRef.clear();
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.widgetCollection[0].component);

    let componentRef = viewContainerRef.createComponent(componentFactory);
    viewContainerRef.createComponent(componentFactory);
    //(<WidgetComponent>componentRef.instance).data = this.widgetCollection[0].data;
  }

}
