import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesProjectCostingComponent } from './activities-project-costing.component';

describe('ActivitiesProjectCostingComponent', () => {
  let component: ActivitiesProjectCostingComponent;
  let fixture: ComponentFixture<ActivitiesProjectCostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesProjectCostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesProjectCostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
