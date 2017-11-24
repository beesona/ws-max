import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerCardComponent } from './borrower-card.component';

describe('BorrowerCardComponent', () => {
  let component: BorrowerCardComponent;
  let fixture: ComponentFixture<BorrowerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
