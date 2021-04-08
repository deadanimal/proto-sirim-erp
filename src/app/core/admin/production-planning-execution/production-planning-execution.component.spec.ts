import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionPlanningExecutionComponent } from './production-planning-execution.component';

describe('ProductionPlanningExecutionComponent', () => {
  let component: ProductionPlanningExecutionComponent;
  let fixture: ComponentFixture<ProductionPlanningExecutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionPlanningExecutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionPlanningExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
