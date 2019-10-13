import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrakDashGooglePhotosComponent } from './prak-dash-google-photos.component';

describe('PrakDashGooglePhotosComponent', () => {
  let component: PrakDashGooglePhotosComponent;
  let fixture: ComponentFixture<PrakDashGooglePhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrakDashGooglePhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrakDashGooglePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
