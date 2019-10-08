import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrakHomeWithConnAccComponent } from './prak-home-with-conn-acc.component';

describe('PrakHomeWithConnAccComponent', () => {
  let component: PrakHomeWithConnAccComponent;
  let fixture: ComponentFixture<PrakHomeWithConnAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrakHomeWithConnAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrakHomeWithConnAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
