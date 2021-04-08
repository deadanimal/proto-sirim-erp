import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningBudgetaryControlComponent } from './planning-budgetary-control.component';

describe('PlanningBudgetaryControlComponent', () => {
  let component: PlanningBudgetaryControlComponent;
  let fixture: ComponentFixture<PlanningBudgetaryControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningBudgetaryControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningBudgetaryControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
