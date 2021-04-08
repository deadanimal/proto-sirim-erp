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
  selector: "app-inventory-control",
  templateUrl: "./inventory-control.component.html",
  styleUrls: ["./inventory-control.component.scss"],
})
export class InventoryControlComponent implements OnInit, OnDestroy {
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
      netMove: "595.03",
      start: "2011/04/25",
      salary: "$320,800",
      name: "John",
      status: "active",
      type: "Full time",
      title: "Blue-cheeked cordon",
      category: "1",
      year: "2011",
      location: "Perak"
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
      type: "Full time",
      title: "Otter, north american river",
      category: "2",
      year: "2011",
      location: "Kedah"
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
      type: "Full time",
      title: "Asian false vampire bat",
      category: "3",
      year: "2009",
      location: "Selangor"
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
      type: "Part time",
      title: "Pelican, australian",
      category: "3",
      year: "2019",
      location: "Kelantan"
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
      type: "Part time",
      title: "Spotted-tailed quoll",
      category: "1",
      year: "2008",
      location: "Perlis"
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
      type: "Full time",
      title: "Blue-cheeked cordon",
      category: "2",
      year: "2011",
      location: "Pulau Pinang"
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
      type: "Full time",
      title: "Blue-cheeked cordon",
      category: "1",
      year: "2008",
      location: "Terengganu"
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
      type: "Part time",
      title: "Blue-cheeked cordon",
      category: "3",
      year: "2009",
      location: "Pahang"
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
      type: "Part time",
      title: "Blue-cheeked cordon",
      category: "1",
      year: "2019",
      location: "Kuala Lumpur"
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
      type: "Full time",
      title: "Blue-cheeked cordon",
      category: "1",
      year: "2008",
      location: "Melaka"
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
      type: "Full time",
      title: "Blue-cheeked cordon",
      category: "2",
      year: "2011",
      location: "Negeri Sembilan"
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
      type: "Full time",
      title: "Blue-cheeked cordon",
      category: "2",
      year: "2009",
      location: "Johor"
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
      type: "Full time",
      title: "Blue-cheeked cordon",
      category: "1",
      year: "2019",
      location: "Sabah"
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
      type: "Full time",
      title: "Blue-cheeked cordon",
      category: "3",
      year: "2008",
      location: "Sarawak"
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
      type: "Full time",
      title: "Blue-cheeked cordon",
      category: "2",
      year: "2009",
      location: "Labuan"
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
      this.getChartIventoryControl1();
      this.getChartIventoryControl2();
    });
  }

  getChartIventoryControl1() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartiventory1", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "Fruits",
        litres: 501.9,
      },
      {
        country: "Vegetables",
        litres: 301.9,
      },
      {
        country: "Palm Oil",
        litres: 201.1,
      },
      {
        country: "Cereals",
        litres: 165.8,
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.innerRadius = am4core.percent(50);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;

    let rgm = new am4core.RadialGradientModifier();
    rgm.brightnesses.push(-0.8, -0.8, -0.5, 0, -0.5);
    pieSeries.slices.template.fillModifier = rgm;
    pieSeries.slices.template.strokeModifier = rgm;
    pieSeries.slices.template.strokeOpacity = 0.4;
    pieSeries.slices.template.strokeWidth = 0;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";

    this.chart1 = chart;
  }

  getChartIventoryControl2() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartiventory2", am4charts.XYChart3D);
    chart.paddingBottom = 30;
    chart.angle = 35;

    // Add data
    chart.data = [
      {
        country: "<3 Days",
        visits: 2025,
      },
      {
        country: "3-7 Days",
        visits: 1882,
      },
      {
        country: "8-14 Days",
        visits: 1809,
      },
      {
        country: "15-28 Days",
        visits: 1322,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let labelTemplate = categoryAxis.renderer.labels.template;
    labelTemplate.rotation = -90;
    labelTemplate.horizontalCenter = "left";
    labelTemplate.verticalCenter = "middle";
    labelTemplate.dy = 10; // moves it a bit down;
    labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;

    // Create series
    let series = chart.series.push(new am4charts.ConeSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";

    let columnTemplate = series.columns.template;
    columnTemplate.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    columnTemplate.adapter.add("stroke", function (stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

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
