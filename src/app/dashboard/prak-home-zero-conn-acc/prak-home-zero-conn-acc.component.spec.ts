import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrakHomeZeroConnAccComponent } from './prak-home-zero-conn-acc.component';

describe('PrakHomeZeroConnAccComponent', () => {
  let component: PrakHomeZeroConnAccComponent;
  let fixture: ComponentFixture<PrakHomeZeroConnAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrakHomeZeroConnAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrakHomeZeroConnAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
