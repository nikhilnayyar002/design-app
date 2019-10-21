import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapodSignUpComponent } from './datapod-sign-up.component';

describe('DatapodSignUpComponent', () => {
  let component: DatapodSignUpComponent;
  let fixture: ComponentFixture<DatapodSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapodSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapodSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
