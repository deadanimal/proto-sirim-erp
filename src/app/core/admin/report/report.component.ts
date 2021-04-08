import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  TemplateRef,
} from "@angular/core";
import { User } from "src/assets/mock/admin-user/users.model";
import { MocksService } from "src/app/shared/services/mocks/mocks.service";

import * as moment from "moment";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"],
})
export class ReportComponent implements OnInit, OnDestroy {
  // Chart
  chart4: any;
  chart1: any;
  chart2: any;
  chart3: any;
  dataChart: any[] = [];
  dataChart2: any[] = [];
  dataChart3: any[] = [];

  // Datepicker
  bsDPConfig = {
    isAnimated: true,
    containerClass: "theme-default",
  };

  constructor(private mockService: MocksService, private zone: NgZone) {
    this.getData();
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart4) {
        this.chart4.dispose();
      }
      if (this.chart1) {
        this.chart1.dispose();
      }
      if (this.chart2) {
        this.chart2.dispose();
      }
      if (this.chart3) {
        this.chart3.dispose();
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
      this.getChartProfitability1();
      this.getChartProfitability2();
      this.getChartProfitability3();
      this.getChartProfitability4();
    });
  }

  getChartProfitability1() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create(
      "chartprofitabilityanalysis1",
      am4charts.XYChart
    );
    chart.colors.step = 2;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.paddingBottom = 20;
    chart.legend.labels.template.maxWidth = 500;

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = "category";
    xAxis.renderer.cellStartLocation = 0.1;
    xAxis.renderer.cellEndLocation = 0.9;
    xAxis.renderer.grid.template.location = 0;

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;

    function createSeries(value, name) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = value;
      series.dataFields.categoryX = "category";
      series.name = name;

      series.events.on("hidden", arrangeColumns);
      series.events.on("shown", arrangeColumns);

      let bullet = series.bullets.push(new am4charts.LabelBullet());
      bullet.interactionsEnabled = false;
      bullet.dy = 30;
      bullet.label.text = "{valueY}";
      bullet.label.fill = am4core.color("#ffffff");

      return series;
    }

    chart.data = [
      {
        category: "2015 Q1",
        first: 40,
        second: 55,
        third: 60,
        forth: 46,
      },
      {
        category: "2015 Q2",
        first: 30,
        second: 78,
        third: 69,
        forth: 24,
      },
      {
        category: "2015 Q3",
        first: 27,
        second: 40,
        third: 45,
        forth: 68,
      },
      {
        category: "2015 Q4",
        first: 50,
        second: 33,
        third: 22,
        forth: 46,
      },
    ];

    createSeries("first", "Past Year");
    createSeries("second", "Current Year");
    createSeries("third", "Target");
    createSeries("forth", "Industry Average");

    function arrangeColumns() {
      let series = chart.series.getIndex(0);

      let w =
        1 -
        xAxis.renderer.cellStartLocation -
        (1 - xAxis.renderer.cellEndLocation);
      if (series.dataItems.length > 1) {
        let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
        let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
        let delta = ((x1 - x0) / chart.series.length) * w;
        if (am4core.isNumber(delta)) {
          let middle = chart.series.length / 2;

          let newIndex = 0;
          chart.series.each(function (series) {
            if (!series.isHidden && !series.isHiding) {
              series.dummyData = newIndex;
              newIndex++;
            } else {
              series.dummyData = chart.series.indexOf(series);
            }
          });
          let visibleCount = newIndex;
          let newMiddle = visibleCount / 2;

          chart.series.each(function (series) {
            let trueIndex = chart.series.indexOf(series);
            let newIndex = series.dummyData;

            let dx = (newIndex - trueIndex + middle - newMiddle) * delta;

            series.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
            series.bulletsContainer.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
          });
        }
      }
    }

    this.chart2 = chart;
  }

  getChartProfitability2() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartprofitabilityanalysis2", am4charts.XYChart);

    // some extra padding for range labels
    chart.paddingBottom = 50;

    chart.cursor = new am4charts.XYCursor();
    chart.scrollbarX = new am4core.Scrollbar();

    // will use this to store colors of the same items
    let colors = {};

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataItems.template.text = "{realName}";
    categoryAxis.adapter.add("tooltipText", function (tooltipText, target) {
      let abcd = categoryAxis.tooltipDataItem.dataContext as any;
      return abcd.realName;
    });

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.min = 0;

    // single column series for all data
    let columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.columns.template.width = am4core.percent(80);
    columnSeries.tooltipText = "{provider}: {realName}, {valueY}";
    columnSeries.dataFields.categoryX = "category";
    columnSeries.dataFields.valueY = "value";

    // second value axis for quantity
    let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.renderer.opposite = true;
    valueAxis2.syncWithAxis = valueAxis;
    valueAxis2.tooltip.disabled = true;

    // quantity line series
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.tooltipText = "{valueY}";
    lineSeries.dataFields.categoryX = "category";
    lineSeries.dataFields.valueY = "quantity";
    lineSeries.yAxis = valueAxis2;
    lineSeries.bullets.push(new am4charts.CircleBullet());
    lineSeries.stroke = chart.colors.getIndex(13);
    lineSeries.fill = lineSeries.stroke;
    lineSeries.strokeWidth = 2;
    lineSeries.snapTooltip = true;

    // when data validated, adjust location of data item based on count
    lineSeries.events.on("datavalidated", function () {
      lineSeries.dataItems.each(function (dataItem) {
        let wasd = dataItem.dataContext as any;
        // if count divides by two, location is 0 (on the grid)
        if (
          wasd.count / 2 ==
          Math.round(wasd.count / 2)
        ) {
          dataItem.setLocation("categoryX", 0);
        }
        // otherwise location is 0.5 (middle)
        else {
          dataItem.setLocation("categoryX", 0.5);
        }
      });
    });

    // fill adapter, here we save color value to colors object so that each time the item has the same name, the same color is used
    columnSeries.columns.template.adapter.add("fill", function (fill, target) {
      let qwert = target.dataItem.dataContext as any;
      let name = qwert.realName;
      if (!colors[name]) {
        colors[name] = chart.colors.next();
      }
      target.stroke = colors[name];
      return colors[name];
    });

    let rangeTemplate = categoryAxis.axisRanges.template;
    rangeTemplate.tick.disabled = false;
    rangeTemplate.tick.location = 0;
    rangeTemplate.tick.strokeOpacity = 0.6;
    rangeTemplate.tick.length = 60;
    rangeTemplate.grid.strokeOpacity = 0.5;
    rangeTemplate.label.tooltip = new am4core.Tooltip();
    rangeTemplate.label.tooltip.dy = -10;
    rangeTemplate.label.cloneTooltip = false;

    ///// DATA
    let chartData = [];
    let lineSeriesData = [];

    let data = {
      "2017": {
        "Net Income": 10,
        "Revenue": 35,
        quantity: 430,
      },
      "2018": {
        "Net Income": 15,
        "Revenue": 21,
        quantity: 210,
      },
      "2019": {
        "Net Income": 25,
        "Revenue": 31,
        quantity: 265,
      },
      "2020": {
        "Net Income": 12,
        "Revenue": 15,
        quantity: 98,
      },
    };

    // process data ant prepare it for the chart
    for (var providerName in data) {
      let providerData = data[providerName];

      // add data of one provider to temp array
      let tempArray = [];
      let count = 0;
      // add items
      for (var itemName in providerData) {
        if (itemName != "quantity") {
          count++;
          // we generate unique category for each column (providerName + "_" + itemName) and store realName
          tempArray.push({
            category: providerName + "_" + itemName,
            realName: itemName,
            value: providerData[itemName],
            provider: providerName,
          });
        }
      }
      // sort temp array
      tempArray.sort(function (a, b) {
        if (a.value > b.value) {
          return 1;
        } else if (a.value < b.value) {
          return -1;
        } else {
          return 0;
        }
      });

      // add quantity and count to middle data item (line series uses it)
      let lineSeriesDataIndex = Math.floor(count / 2);
      tempArray[lineSeriesDataIndex].quantity = providerData.quantity;
      tempArray[lineSeriesDataIndex].count = count;
      // push to the final data
      am4core.array.each(tempArray, function (item) {
        chartData.push(item);
      });

      // create range (the additional label at the bottom)
      let range = categoryAxis.axisRanges.create();
      range.category = tempArray[0].category;
      range.endCategory = tempArray[tempArray.length - 1].category;
      range.label.text = tempArray[0].provider;
      range.label.dy = 30;
      range.label.truncate = true;
      range.label.fontWeight = "bold";
      range.label.tooltipText = tempArray[0].provider;

      range.label.adapter.add("maxWidth", function (maxWidth, target) {
        let range = target.dataItem as any;
        let startPosition = categoryAxis.categoryToPosition(range.category, 0);
        let endPosition = categoryAxis.categoryToPosition(range.endCategory, 1);
        let startX = categoryAxis.positionToCoordinate(startPosition);
        let endX = categoryAxis.positionToCoordinate(endPosition);
        return endX - startX;
      });
    }

    chart.data = chartData;

    // last tick
    let range = categoryAxis.axisRanges.create();
    range.category = chart.data[chart.data.length - 1].category;
    range.label.disabled = true;
    range.tick.location = 1;
    range.grid.location = 1;

    this.chart2 = chart;
  }

  getChartProfitability3() {
    let chart = am4core.create(
      "chartprofitabilityanalysis3",
      am4charts.XYChart
    );
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

    this.chart3 = chart;
  }

  getChartProfitability4() {
    let chart = am4core.create(
      "chartprofitabilityanalysis4",
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

    this.chart4 = chart;
  }
}
