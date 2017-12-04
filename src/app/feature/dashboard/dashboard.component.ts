import { Component, OnInit, Directive, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AfterViewInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { WidgetDirective } from './widget.directive';
import { WidgetComponent } from './widget.component';
import { DashboardWidget } from './dashboard-widget';
import { PrimaryContactFormComponent } from '../demographics/primary-contact-form/primary-contact-form.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild(WidgetDirective) dbw: WidgetDirective;
  defaultDashboard: boolean = true;

  //hardcoded now, but should be returned from a dashboardLayoutService
  widgetCollection: DashboardWidget[] = [new DashboardWidget(PrimaryContactFormComponent, { Title: 'Demographics', body: 'NA'})];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    this.loadWidgets();
  }

  loadWidgets(): void{
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.widgetCollection[0].component);
    
    let viewContainerRef = this.dbw.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    //(<WidgetComponent>componentRef.instance).data = this.widgetCollection[0].data;
  }

}
