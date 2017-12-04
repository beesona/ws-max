import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dbw]',
})
export class WidgetDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}