import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementAnalysisComponent } from './procurement-analysis.component';

describe('ProcurementAnalysisComponent', () => {
  let component: ProcurementAnalysisComponent;
  let fixture: ComponentFixture<ProcurementAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurementAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
