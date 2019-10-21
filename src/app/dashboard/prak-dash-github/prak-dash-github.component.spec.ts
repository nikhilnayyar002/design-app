import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrakDashGithubComponent } from './prak-dash-github.component';

describe('PrakDashGithubComponent', () => {
  let component: PrakDashGithubComponent;
  let fixture: ComponentFixture<PrakDashGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrakDashGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrakDashGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
