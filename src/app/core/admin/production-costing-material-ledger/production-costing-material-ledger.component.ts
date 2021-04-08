import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  TemplateRef,
} from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
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
  selector: "app-production-costing-material-ledger",
  templateUrl: "./production-costing-material-ledger.component.html",
  styleUrls: ["./production-costing-material-ledger.component.scss"],
})
export class ProductionCostingMaterialLedgerComponent
  implements OnInit, OnDestroy {
  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;

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
      name: "John",
      status: "active",
      type: "Invoice",
      title: "Blue-cheeked cordon",
      category: "1",
      year: "2011",
      location: "Perak",
    },
    {
      accNo: "ACC-119-VLJ",
      debit: "785.51",
      credit: "795.16",
      netMove: "314.71",
      start: "2011/07/25",
      salary: "$170,750",
      name: "Ahmad",
      status: "unactive",
      type: "Invoice",
      title: "Otter, north american river",
      category: "2",
      year: "2011",
      location: "Kedah",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "426.32",
      start: "2009/01/12",
      salary: "$86,000",
      name: "Trish",
      status: "inproduction",
      type: "Invoice",
      title: "Asian false vampire bat",
      category: "3",
      year: "2009",
      location: "Selangor",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "562",
      start: "2019/03/29",
      salary: "$433,060",
      name: "Sara",
      status: "active",
      type: "Invoice",
      title: "Pelican, australian",
      category: "3",
      year: "2019",
      location: "Kelantan",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "983.35",
      start: "2008/11/28",
      salary: "$162,700",
      name: "Malek",
      status: "unactive",
      type: "Invoice",
      title: "Spotted-tailed quoll",
      category: "1",
      year: "2008",
      location: "Perlis",
    },
    {
      accNo: "ACC-119-VLJ",
      debit: "785.51",
      credit: "795.16",
      netMove: "314.71",
      start: "2011/07/25",
      salary: "$170,750",
      name: "Cheng Hong",
      status: "unactive",
      type: "Invoice",
      title: "Blue-cheeked cordon",
      category: "2",
      year: "2011",
      location: "Pulau Pinang",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "983.35",
      start: "2008/11/28",
      salary: "$162,700",
      name: "Arumugam",
      status: "active",
      type: "Invoice",
      title: "Blue-cheeked cordon",
      category: "1",
      year: "2008",
      location: "Terengganu",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "426.32",
      start: "2009/01/12",
      salary: "$86,000",
      name: "Ronaldo",
      status: "inproduction",
      type: "Invoice",
      title: "Blue-cheeked cordon",
      category: "3",
      year: "2009",
      location: "Pahang",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "562",
      start: "2019/03/29",
      salary: "$433,060",
      name: "Neymar",
      status: "unactive",
      type: "Invoice",
      title: "Blue-cheeked cordon",
      category: "1",
      year: "2019",
      location: "Kuala Lumpur",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "983.35",
      start: "2008/11/28",
      salary: "$162,700",
      name: "John",
      status: "inproduction",
      type: "Invoice",
      title: "Blue-cheeked cordon",
      category: "1",
      year: "2008",
      location: "Melaka",
    },
    {
      accNo: "ACC-719-MOX",
      debit: "849.19",
      credit: "754.16",
      netMove: "595.03",
      start: "2011/04/25",
      salary: "$320,800",
      name: "John",
      status: "active",
      type: "Invoice",
      title: "Blue-cheeked cordon",
      category: "2",
      year: "2011",
      location: "Negeri Sembilan",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "426.32",
      start: "2009/01/12",
      salary: "$86,000",
      name: "John",
      status: "active",
      type: "Invoice",
      title: "Blue-cheeked cordon",
      category: "2",
      year: "2009",
      location: "Johor",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "562",
      start: "2019/03/29",
      salary: "$433,060",
      name: "John",
      status: "active",
      type: "Invoice",
      title: "Blue-cheeked cordon",
      category: "1",
      year: "2019",
      location: "Sabah",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "983.35",
      start: "2008/11/28",
      salary: "$162,700",
      name: "John",
      status: "inproduction",
      type: "Invoice",
      title: "Blue-cheeked cordon",
      category: "3",
      year: "2008",
      location: "Sarawak",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "426.32",
      start: "2009/01/12",
      salary: "$385,750",
      name: "John",
      status: "active",
      type: "Invoice",
      title: "Blue-cheeked cordon",
      category: "2",
      year: "2009",
      location: "Labuan",
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
      if (this.chart2) {
        console.log("Chart disposed");
        this.chart2.dispose();
      }
      if (this.chart3) {
        console.log("Chart disposed");
        this.chart3.dispose();
      }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartProductionCosting1();
      this.getChartProductionCosting2();
      this.getChartProductionCosting3();
    });
  }

  getChartProductionCosting1() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartproductioncosting1", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [
      {
        country: "2017",
        visits: 2025,
      },
      {
        country: "2018",
        visits: 1882,
      },
      {
        country: "2019",
        visits: 1809,
      },
      {
        country: "2020",
        visits: 1322,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();

    this.chart1 = chart;
  }

  getChartProductionCosting2() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartproductioncosting2", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "Client",
        litres: 501.9,
      },
      {
        country: "Staff",
        litres: 165.8,
      },
      {
        country: "Scheduled",
        litres: 139.9,
      },
    ];

    chart.innerRadius = 100;

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";

    this.chart2 = chart;
  }

  getChartProductionCosting3() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartproductioncosting3", am4charts.XYChart3D);

    // Add data
    chart.data = [
      {
        country: "Sun",
        visits: 3025,
      },
      {
        country: "Mon",
        visits: 7882,
      },
      {
        country: "Tue",
        visits: 6809,
      },
      {
        country: "Wed",
        visits: 8322,
      },
      {
        country: "Thu",
        visits: 9122,
      },
      {
        country: "Fri",
        visits: 6114,
      },
      {
        country: "Sat",
        visits: 8984,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.renderer.labels.template.hideOversized = false;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.tooltip.label.rotation = 270;
    categoryAxis.tooltip.label.horizontalCenter = "right";
    categoryAxis.tooltip.label.verticalCenter = "middle";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Countries";
    valueAxis.title.fontWeight = "bold";

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.stroke = am4core.color("#FFFFFF");

    columnTemplate.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    columnTemplate.adapter.add("stroke", function (stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineY.strokeOpacity = 0;

    this.chart3 = chart;
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

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
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
    swal
      .fire({
        title: "Confirmation",
        text: "Are you sure want to delete this data?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info",
        confirmButtonText: "Confirm",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Cancel",
      })
      .then((result) => {
        if (result.value) {
          this.doneDelete();
        }
      });
  }

  doneDelete() {
    swal.fire({
      title: "Success",
      text: "The data has been deleted!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close",
    });
  }
}
