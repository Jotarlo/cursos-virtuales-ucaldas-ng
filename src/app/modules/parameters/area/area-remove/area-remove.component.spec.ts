import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaRemoveComponent } from './area-remove.component';

describe('AreaRemoveComponent', () => {
  let component: AreaRemoveComponent;
  let fixture: ComponentFixture<AreaRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
