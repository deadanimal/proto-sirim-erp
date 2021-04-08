import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbabilityAnalysisComponent } from './probability-analysis.component';

describe('ProbabilityAnalysisComponent', () => {
  let component: ProbabilityAnalysisComponent;
  let fixture: ComponentFixture<ProbabilityAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbabilityAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbabilityAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
