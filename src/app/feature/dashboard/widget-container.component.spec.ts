import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetContainer.Component } from './widget-container.component';

describe('WidgetContainer.Component', () => {
  let component: WidgetContainer.Component;
  let fixture: ComponentFixture<WidgetContainer.Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetContainer.Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetContainer.Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
