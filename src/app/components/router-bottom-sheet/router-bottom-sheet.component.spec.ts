import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterBottomSheetComponent } from './router-bottom-sheet.component';

describe('RouterBottomSheetComponent', () => {
  let component: RouterBottomSheetComponent;
  let fixture: ComponentFixture<RouterBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
