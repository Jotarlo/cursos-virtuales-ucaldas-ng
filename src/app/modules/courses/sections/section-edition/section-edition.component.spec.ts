import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEditionComponent } from './section-edition.component';

describe('SectionEditionComponent', () => {
  let component: SectionEditionComponent;
  let fixture: ComponentFixture<SectionEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
