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
  selector: "app-fixed-asset",
  templateUrl: "./fixed-asset.component.html",
  styleUrls: ["./fixed-asset.component.scss"],
})
export class FixedAssetComponent implements OnInit, OnDestroy {
  // Chart
  private chart1: any;
  private chart2: any;

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
      netMove: "5",
      start: "2011/04/25",
      salary: "320.80",
      name: "John",
      status: "Owner",
      type: "Cash Out",
      reg: "Register 1",
      desc: "Testing",
    },
    {
      accNo: "ACC-119-VLJ",
      debit: "785.51",
      credit: "795.16",
      netMove: "3",
      start: "2011/07/25",
      salary: "$170,750",
      name: "Ahmad",
      status: "Owner",
      type: "Cash Out",
      reg: "Register 1",
      desc: "Cleaning supplies",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "4",
      start: "2009/01/12",
      salary: "$86,000",
      name: "Trish",
      status: "Owner",
      type: "Cash Out",
      reg: "Register 2",
      desc: "Testing",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "5",
      start: "2012/03/29",
      salary: "$433,060",
      name: "Sara",
      status: "Owner",
      type: "Cash Out",
      reg: "Register 4",
      desc: "Staff coffee",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "9",
      start: "2008/11/28",
      salary: "$162,700",
      name: "Malek",
      status: "Owner",
      type: "Cash Out",
      reg: "Register 2",
      desc: "Staff coffee",
    },
    {
      accNo: "ACC-119-VLJ",
      debit: "785.51",
      credit: "795.16",
      netMove: "14",
      start: "2011/07/25",
      salary: "$170,750",
      name: "Cheng Hong",
      status: "Owner",
      type: "Cash Out",
      reg: "Register 1",
      desc: "Cleaning supplies",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "8",
      start: "2008/11/28",
      salary: "$162,700",
      name: "Arumugam",
      status: "Owner",
      type: "Cash Out",
      reg: "Register 1",
      desc: "Testing",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "4",
      start: "2009/01/12",
      salary: "$86,000",
      name: "Ronaldo",
      status: "Owner",
      type: "Cash Out",
      reg: "Register 5",
      desc: "Testing",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "5",
      start: "2012/03/29",
      salary: "$433,060",
      name: "Neymar",
      status: "Owner",
      type: "Cash Out",
      reg: "Register 4",
      desc: "Cleaning supplies",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "3",
      start: "2008/11/28",
      salary: "$162,700",
      name: "John",
      status: "Owner",
      type: "Cash Out",
      reg: "Register 5",
      desc: "Staff coffee",
    },
    {
      accNo: "ACC-719-MOX",
      debit: "849.19",
      credit: "754.16",
      netMove: "9",
      start: "2011/04/25",
      salary: "$320,800",
      name: "John",
      status: "Owner",
      type: "Cash Out",
      reg: "Register 3",
      desc: "Testing",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "42",
      start: "2009/01/12",
      salary: "$86,000",
      name: "John",
      status: "Owner",
      type: "Cash Out",
      reg: "Register 4",
      desc: "Cleaning supplies",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "2",
      start: "2012/03/29",
      salary: "$433,060",
      name: "John",
      status: "Owner",
      type: "Cash Out",
      reg: "Register 1",
      desc: "Testing",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "9",
      start: "2008/11/28",
      salary: "$162,700",
      name: "John",
      status: "Owner",
      type: "Cash Out",
      reg: "Register 1",
      desc: "Testing",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "42",
      start: "2009/01/12",
      salary: "$385,750",
      name: "John",
      status: "Owner",
      type: "Cash Out",
      reg: "Register 6",
      desc: "Cleaning supplies",
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
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartFixedAsset1();
      this.getChartFixedAsset2();
    });
  }

  getChartFixedAsset1() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartfixedasset1", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [
      {
        country: "Check-out",
        visits: 3025,
      },
      {
        country: "Check-in",
        visits: 1882,
      },
      {
        country: "Pending",
        visits: 1809,
      },
      {
        country: "Maintenance",
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

  getChartFixedAsset2() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartfixedasset2", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "Lithuania",
        value: 401,
      },
      {
        country: "Czech Republic",
        value: 300,
      },
      {
        country: "Ireland",
        value: 200,
      },
      {
        country: "Germany",
        value: 165,
      },
      {
        country: "Australia",
        value: 139,
      },
      {
        country: "Austria",
        value: 128,
      },
    ];
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "country";

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;

    chart.legend = new am4charts.Legend();

    this.chart2 = chart;
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
