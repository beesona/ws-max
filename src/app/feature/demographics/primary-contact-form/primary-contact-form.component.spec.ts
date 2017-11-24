import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryContactFormComponent } from './primary-contact-form.component';

describe('PrimaryContactFormComponent', () => {
  let component: PrimaryContactFormComponent;
  let fixture: ComponentFixture<PrimaryContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
