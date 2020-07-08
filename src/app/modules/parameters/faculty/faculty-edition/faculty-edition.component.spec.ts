import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyEditionComponent } from './faculty-edition.component';

describe('FacultyEditionComponent', () => {
  let component: FacultyEditionComponent;
  let fixture: ComponentFixture<FacultyEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
