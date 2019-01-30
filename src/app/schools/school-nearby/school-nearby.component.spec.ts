import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolNearbyComponent } from './school-nearby.component';

describe('SchoolNearbyComponent', () => {
  let component: SchoolNearbyComponent;
  let fixture: ComponentFixture<SchoolNearbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolNearbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolNearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
