import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSearchOneComponent } from './custom-search-one.component';

describe('CustomSearchOneComponent', () => {
  let component: CustomSearchOneComponent;
  let fixture: ComponentFixture<CustomSearchOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSearchOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSearchOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
