import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithAccountComponent } from './header-with-account.component';

describe('HeaderWithAccountComponent', () => {
  let component: HeaderWithAccountComponent;
  let fixture: ComponentFixture<HeaderWithAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderWithAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWithAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
