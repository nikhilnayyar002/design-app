import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrakDashboardParentComponent } from './prak-dashboard-parent.component';

describe('PrakDashboardParentComponent', () => {
  let component: PrakDashboardParentComponent;
  let fixture: ComponentFixture<PrakDashboardParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrakDashboardParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrakDashboardParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
