import { Component, OnInit, Directive, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AfterViewInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { WidgetDirective } from './widget.directive';
import { WidgetComponent } from './widget.component';
import { DashboardWidget } from './dashboard-widget';
import { PrimaryContactFormComponent } from '../demographics/primary-contact-form/primary-contact-form.component'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { Subscription }   from 'rxjs/Subscription';

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

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private _msgSvc: MessageService) { }

  borrower: any;
  formTest: any = {
    firstName: 'Adam',
    lastName: 'Beeson'
  }
  firstName: FormControl;
  lastName: FormControl;
  nameFormGroup: FormGroup;
  subscription: Subscription;

  ngOnInit(){
    if (this._msgSvc.storedMessage != undefined){
      this.borrower = this._msgSvc.storedMessage;
    } 
    this.subscription = this._msgSvc.message$.subscribe(
      message => {        
        this.borrower = message;
        console.log(this.borrower);
        if (this.borrower) {
          this.loadWidgets();
        }
      })
    this.firstName = new FormControl(this.formTest.firstName, Validators.required);
    this.lastName = new FormControl(this.formTest.lastName, Validators.required);
    this.nameFormGroup = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  ngAfterViewInit() {
    //this.loadWidgets();
  }

  logNames(val: any){
    console.log(val);
  }

  loadWidgets(): void{
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.widgetCollection[0].component);
    
    let viewContainerRef = this.dbw.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    //(<WidgetComponent>componentRef.instance).data = this.widgetCollection[0].data;
  }

}
