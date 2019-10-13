import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrakConnGoogleAccountComponent } from './prak-conn-google-account.component';

describe('PrakConnGoogleAccountComponent', () => {
  let component: PrakConnGoogleAccountComponent;
  let fixture: ComponentFixture<PrakConnGoogleAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrakConnGoogleAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrakConnGoogleAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
