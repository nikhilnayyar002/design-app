import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrakConnGithubAccountComponent } from './prak-conn-github-account.component';

describe('PrakConnGithubAccountComponent', () => {
  let component: PrakConnGithubAccountComponent;
  let fixture: ComponentFixture<PrakConnGithubAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrakConnGithubAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrakConnGithubAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
