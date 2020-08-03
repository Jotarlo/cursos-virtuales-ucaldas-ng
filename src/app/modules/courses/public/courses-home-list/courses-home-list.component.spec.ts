import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesHomeListComponent } from './courses-home-list.component';

describe('CoursesHomeListComponent', () => {
  let component: CoursesHomeListComponent;
  let fixture: ComponentFixture<CoursesHomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesHomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
