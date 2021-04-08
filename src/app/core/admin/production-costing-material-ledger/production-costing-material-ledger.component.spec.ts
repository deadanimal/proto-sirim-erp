import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionCostingMaterialLedgerComponent } from './production-costing-material-ledger.component';

describe('ProductionCostingMaterialLedgerComponent', () => {
  let component: ProductionCostingMaterialLedgerComponent;
  let fixture: ComponentFixture<ProductionCostingMaterialLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionCostingMaterialLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionCostingMaterialLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
