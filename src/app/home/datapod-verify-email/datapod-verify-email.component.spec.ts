import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapodVerifyEmailComponent } from './datapod-verify-email.component';

describe('DatapodVerifyEmailComponent', () => {
  let component: DatapodVerifyEmailComponent;
  let fixture: ComponentFixture<DatapodVerifyEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapodVerifyEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapodVerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
