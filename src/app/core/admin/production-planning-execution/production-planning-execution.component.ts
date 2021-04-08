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
import { MocksService } from "src/app/shared/services/mocks/mocks.service";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-production-planning-execution",
  templateUrl: "./production-planning-execution.component.html",
  styleUrls: ["./production-planning-execution.component.scss"],
})
export class ProductionPlanningExecutionComponent implements OnInit, OnDestroy {
  // Datepicker
  bsDPConfig = {
    isAnimated: true,
    containerClass: "theme-default",
  };

  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;
  private chart4: any;
  private chart5: any;
  dataChart: any[] = [];
  dataChart2: any[] = [];
  dataChart3: any[] = [];

  constructor(private mockService: MocksService, private zone: NgZone) {
    this.getData();
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
      if (this.chart4) {
        console.log("Chart disposed");
        this.chart4.dispose();
      }
      if (this.chart5) {
        console.log("Chart disposed");
        this.chart5.dispose();
      }
    });
  }

  getData() {
    this.mockService.getAll("admin-report/report-data-1.json").subscribe(
      (res) => {
        // Success
        this.dataChart = res;
      },
      () => {
        // Unsuccess
      },
      () => {
        // After
        this.mockService.getAll("admin-report/report-data-2.json").subscribe(
          (res) => {
            // Success
            this.dataChart2 = res;
          },
          () => {
            // Unsuccess
          },
          () => {
            // After
            this.mockService
              .getAll("admin-report/report-data-3.json")
              .subscribe(
                (res) => {
                  // Success
                  this.dataChart3 = res;
                },
                () => {
                  // Unsuccess
                },
                () => {
                  // After
                  this.getCharts();
                }
              );
          }
        );
      }
    );
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartProductionPlanningExecution1();
      this.getChartProductionPlanningExecution2();
      this.getChartProductionPlanningExecution3();
      this.getChartProductionPlanningExecution4();
      this.getChartProductionPlanningExecution5();
    });
  }

  getChartProductionPlanningExecution1() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartproplanexe1", am4charts.XYChart3D);

    // Add data
    chart.data = [
      {
        country: "Machine A",
        visits: 45,
      },
      {
        country: "Machine B",
        visits: 88,
      },
      {
        country: "Machine C",
        visits: 76,
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

    this.chart1 = chart;
  }

  getChartProductionPlanningExecution2() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartproplanexe2", am4charts.XYChart3D);

    // Add data
    chart.data = [
      {
        country: "Machine A",
        visits: 46,
      },
      {
        country: "Machine B",
        visits: 57,
      },
      {
        country: "Machine C",
        visits: 68,
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

    this.chart2 = chart;
  }

  getChartProductionPlanningExecution3() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartproplanexe3", am4charts.XYChart3D);

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
        year2017: 9.9,
        year2018: 10.1,
      },
      {
        country: "Oct",
        year2017: 3.4,
        year2018: 4.2,
      },
      {
        country: "Nov",
        year2017: 8,
        year2018: 6.2,
      },
      {
        country: "Dec",
        year2017: 4.2,
        year2018: 5.8,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "GDP growth rate";
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
      return text + "%";
    });

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "year2017";
    series.dataFields.categoryX = "country";
    series.name = "Year 2017";
    series.clustered = false;
    series.columns.template.tooltipText =
      "Planned in {country} : [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.9;

    let series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "year2018";
    series2.dataFields.categoryX = "country";
    series2.name = "Year 2018";
    series2.clustered = false;
    series2.columns.template.tooltipText =
      "Actual in {country} : [bold]{valueY}[/]";

    this.chart3 = chart;
  }

  getChartProductionPlanningExecution4() {
    let chart = am4core.create("chartproplanexe4", am4charts.XYChart);
    chart.paddingRight = 20;

    let data = this.dataChart;

    chart.data = data;
    chart.dateFormatter.inputDateFormat = "yyyy";

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.baseInterval = { timeUnit: "year", count: 2 };

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    let series = chart.series.push(new am4charts.StepLineSeries());
    series.dataFields.dateX = "year";
    series.dataFields.valueY = "amount";
    series.tooltipText = "{valueY.amount}";
    series.strokeWidth = 3;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.cursor.fullWidthLineX = true;
    chart.cursor.lineX.strokeWidth = 0;
    chart.cursor.lineX.fill = chart.colors.getIndex(2);
    chart.cursor.lineX.fillOpacity = 0.1;

    chart.scrollbarX = new am4core.Scrollbar();

    this.chart4 = chart;
  }

  getChartProductionPlanningExecution5() {
    let chart = am4core.create(
      "chartproplanexe5",
      am4charts.XYChart
    );
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    let data = [];
    let open = 100;
    let close = 250;

    for (var i = 1; i < 120; i++) {
      open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 4);
      close = Math.round(
        open +
          Math.random() * 5 +
          i / 5 -
          (Math.random() < 0.5 ? 1 : -1) * Math.random() * 2
      );
      data.push({ date: new Date(2018, 0, i), open: open, close: close });
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0.3;
    series.defaultState.transitionDuration = 1000;
    series.tensionX = 0.8;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "open";
    series2.sequencedInterpolation = true;
    series2.defaultState.transitionDuration = 1500;
    series2.stroke = chart.colors.getIndex(6);
    series2.tensionX = 0.8;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.scrollbarX = new am4core.Scrollbar();

    this.chart5 = chart;
  }
}
