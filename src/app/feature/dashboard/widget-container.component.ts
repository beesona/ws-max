import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.css']
})
export class WidgetContainerComponent implements OnInit {

  @Input() widgetTitle: string = "Default Widget Title";
  @Input() color: string = 'yellow';
  isExpanded: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  hideShowContent(): void {
    this.isExpanded = !this.isExpanded;
  }

}
