import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrakDashGithubMyRepoComponent } from './prak-dash-github-my-repo.component';

describe('PrakDashGithubMyRepoComponent', () => {
  let component: PrakDashGithubMyRepoComponent;
  let fixture: ComponentFixture<PrakDashGithubMyRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrakDashGithubMyRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrakDashGithubMyRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
