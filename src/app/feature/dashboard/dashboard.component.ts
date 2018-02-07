import { Component, OnInit, Directive, ViewContainerRef, ViewChild, ComponentFactoryResolver, Input } from '@angular/core';
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
import { AccountComponent } from '../account/account.component';
import { HistoryComponent } from '../history/history.component';
import { WidgetContainerComponent } from './widget-container.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild(WidgetDirective) dbw: WidgetDirective;
  defaultDashboard: boolean = true;

  //hardcoded now, but should be returned from a dashboardLayoutService
  widgetCollection: DashboardWidget[] = [
    new DashboardWidget(PrimaryContactFormComponent, { title: 'Demographics', isWidget: true}),
    new DashboardWidget(AccountComponent, { title: 'Account Information', isWidget: true}),
    new DashboardWidget(HistoryComponent, { title: 'Recent Activity', isWidget: true})
  ];

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private _borrSvc: BorrowerDemographicsService) { }

  borrower: IBorrower;
  subscription: Subscription;

  ngOnInit(){

  }

  ngAfterViewInit() {
    //this.loadWidgets();
  }

  loadWidgets(): void{
    let viewContainerRef = this.dbw.viewContainerRef;
    viewContainerRef.clear();
    this.widgetCollection.forEach( widget => {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(widget.component);
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<WidgetComponent>componentRef.instance).data = widget.data;
    });
  }
}