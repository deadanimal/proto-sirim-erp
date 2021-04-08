import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  TemplateRef,
} from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import swal from "sweetalert2";
import { BsModalRef, BsModalService } from "ngx-bootstrap";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-planning-budgetary-control",
  templateUrl: "./planning-budgetary-control.component.html",
  styleUrls: ["./planning-budgetary-control.component.scss"],
})
export class PlanningBudgetaryControlComponent implements OnInit, OnDestroy {
  // Chart
  private chart1: any;

  // Modal
  modalRef: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  //table
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      accNo: "ACC-719-MOX",
      debit: "849.19",
      credit: "754.16",
      netMove: "595.03",
      start: "2011/04/25",
      salary: "$320,800",
    },
    {
      accNo: "ACC-119-VLJ",
      debit: "785.51",
      credit: "795.16",
      netMove: "314.71",
      start: "2011/07/25",
      salary: "$170,750",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "426.32",
      start: "2009/01/12",
      salary: "$86,000",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "562",
      start: "2012/03/29",
      salary: "$433,060",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "983.35",
      start: "2008/11/28",
      salary: "$162,700",
    },
    {
      accNo: "ACC-119-VLJ",
      debit: "785.51",
      credit: "795.16",
      netMove: "314.71",
      start: "2011/07/25",
      salary: "$170,750",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "983.35",
      start: "2008/11/28",
      salary: "$162,700",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "426.32",
      start: "2009/01/12",
      salary: "$86,000",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "562",
      start: "2012/03/29",
      salary: "$433,060",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "983.35",
      start: "2008/11/28",
      salary: "$162,700",
    },
    {
      accNo: "ACC-719-MOX",
      debit: "849.19",
      credit: "754.16",
      netMove: "595.03",
      start: "2011/04/25",
      salary: "$320,800",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "426.32",
      start: "2009/01/12",
      salary: "$86,000",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "562",
      start: "2012/03/29",
      salary: "$433,060",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "983.35",
      start: "2008/11/28",
      salary: "$162,700",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "426.32",
      start: "2009/01/12",
      salary: "$385,750",
    },
  ];
  SelectionType = SelectionType;

  constructor(private zone: NgZone, private modalService: BsModalService) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
  }

  ngOnInit() {
    this.getCharts();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartPlanningControl1();
    });
  }

  getChartPlanningControl1() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartplanningcontrol1", am4charts.XYChart3D);

    // Add data
    chart.data = [
      {
        country: "Jan",
        year2017: 3.5,
        year2018: 4.2,
      },
      {
        country: "Feb",
        year2017: 1.7,
        year2018: 3.1,
      },
      {
        country: "Mar",
        year2017: 2.8,
        year2018: 2.9,
      },
      {
        country: "Apr",
        year2017: 2.6,
        year2018: 2.3,
      },
      {
        country: "May",
        year2017: 1.4,
        year2018: 2.1,
      },
      {
        country: "June",
        year2017: 2.6,
        year2018: 4.9,
      },
      {
        country: "July",
        year2017: 6.4,
        year2018: 7.2,
      },
      {
        country: "Aug",
        year2017: 8,
        year2018: 7.1,
      },
      {
        country: "Sep",
        year2017: 7.3,
        year2018: 8.1,
      },
      {
        country: "Oct",
        year2017: 7.6,
        year2018: 9.2,
      },
      {
        country: "Nov",
        year2017: 2,
        year2018: 3.5,
      },
      {
        country: "Dec",
        year2017: 7.2,
        year2018: 10.1,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Budget (RM)";
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
      return text + "%";
    });

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "year2017";
    series.dataFields.categoryX = "country";
    series.name = "Forecast";
    series.clustered = false;
    series.columns.template.tooltipText =
      "Forecast Budget in {country} : [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.9;

    let series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "year2018";
    series2.dataFields.categoryX = "country";
    series2.name = "Actual";
    series2.clustered = false;
    series2.columns.template.tooltipText =
      "Actual Budget in {country} : [bold]{valueY}[/]";

    this.chart1 = chart;
  }

  successSwal(task) {
    swal.fire({
      title: "Success",
      text: "Successfully " + task + "!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
    });
  }

  entriesChange($event){
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {

      for(var key in d){
        if(d[key].toLowerCase().indexOf(val) !== -1){
          return true;
        }
      }
      return false;
    });
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalRef, this.modalConfig);
  }

  delete() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure want to delete this data?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-info",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.value) {
        this.doneDelete()
      }
    })
  }

  doneDelete() {
    swal.fire({
      title: "Success",
      text: "The data has been deleted!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    })
  }
}
