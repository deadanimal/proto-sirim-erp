import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDistributionComponent } from './sales-distribution.component';

describe('SalesDistributionComponent', () => {
  let component: SalesDistributionComponent;
  let fixture: ComponentFixture<SalesDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
