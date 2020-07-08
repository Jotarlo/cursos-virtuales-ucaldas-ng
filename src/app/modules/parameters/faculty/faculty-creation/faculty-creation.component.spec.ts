import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCreationComponent } from './faculty-creation.component';

describe('FacultyCreationComponent', () => {
  let component: FacultyCreationComponent;
  let fixture: ComponentFixture<FacultyCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
