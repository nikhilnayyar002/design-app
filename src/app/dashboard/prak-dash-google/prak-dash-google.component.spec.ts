import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrakDashGoogleComponent } from './prak-dash-google.component';

describe('PrakDashGoogleComponent', () => {
  let component: PrakDashGoogleComponent;
  let fixture: ComponentFixture<PrakDashGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrakDashGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrakDashGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
