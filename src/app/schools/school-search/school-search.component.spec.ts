import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSearchComponent } from './school-search.component';

describe('SchoolSearchComponent', () => {
  let component: SchoolSearchComponent;
  let fixture: ComponentFixture<SchoolSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
