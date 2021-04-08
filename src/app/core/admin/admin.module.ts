import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { GeneralLedgerComponent } from './general-ledger/general-ledger.component';
import { PlanningBudgetaryControlComponent } from './planning-budgetary-control/planning-budgetary-control.component';
import { ActivitiesProjectCostingComponent } from './activities-project-costing/activities-project-costing.component';
import { AccountReceivableComponent } from './account-receivable/account-receivable.component';
import { PettyCashComponent } from './petty-cash/petty-cash.component';
import { AccountPayableComponent } from './account-payable/account-payable.component';
import { FixedAssetComponent } from './fixed-asset/fixed-asset.component';
import { ProbabilityAnalysisComponent } from './probability-analysis/probability-analysis.component';
import { ProcurementVendorListComponent } from './procurement-vendor-list/procurement-vendor-list.component';
import { ProcurementAnalysisComponent } from './procurement-analysis/procurement-analysis.component';
import { SalesDistributionComponent } from './sales-distribution/sales-distribution.component';
import { ProductionPlanningExecutionComponent } from './production-planning-execution/production-planning-execution.component';
import { InventoryControlComponent } from './inventory-control/inventory-control.component';
import { ProductionCostingMaterialLedgerComponent } from './production-costing-material-ledger/production-costing-material-ledger.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    GeneralLedgerComponent,
    PlanningBudgetaryControlComponent,
    ActivitiesProjectCostingComponent,
    AccountReceivableComponent,
    PettyCashComponent,
    AccountPayableComponent,
    FixedAssetComponent,
    ProbabilityAnalysisComponent,
    ProcurementVendorListComponent,
    ProcurementAnalysisComponent,
    SalesDistributionComponent,
    ProductionPlanningExecutionComponent,
    InventoryControlComponent,
    ProductionCostingMaterialLedgerComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
