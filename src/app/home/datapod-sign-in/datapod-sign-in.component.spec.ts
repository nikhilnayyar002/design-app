import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapodSignInComponent } from './datapod-sign-in.component';

describe('DatapodSignInComponent', () => {
  let component: DatapodSignInComponent;
  let fixture: ComponentFixture<DatapodSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapodSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapodSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
