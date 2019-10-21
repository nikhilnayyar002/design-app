import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrakDashGithubStarRepoComponent } from './prak-dash-github-star-repo.component';

describe('PrakDashGithubStarRepoComponent', () => {
  let component: PrakDashGithubStarRepoComponent;
  let fixture: ComponentFixture<PrakDashGithubStarRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrakDashGithubStarRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrakDashGithubStarRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
