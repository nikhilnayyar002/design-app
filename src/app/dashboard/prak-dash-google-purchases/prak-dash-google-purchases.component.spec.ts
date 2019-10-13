import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrakDashGooglePurchasesComponent } from './prak-dash-google-purchases.component';

describe('PrakDashGooglePurchasesComponent', () => {
  let component: PrakDashGooglePurchasesComponent;
  let fixture: ComponentFixture<PrakDashGooglePurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrakDashGooglePurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrakDashGooglePurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
