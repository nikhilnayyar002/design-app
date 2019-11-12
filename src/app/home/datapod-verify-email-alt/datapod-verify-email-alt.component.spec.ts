import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapodVerifyEmailAltComponent } from './datapod-verify-email-alt.component';

describe('DatapodVerifyEmailAltComponent', () => {
  let component: DatapodVerifyEmailAltComponent;
  let fixture: ComponentFixture<DatapodVerifyEmailAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapodVerifyEmailAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapodVerifyEmailAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
