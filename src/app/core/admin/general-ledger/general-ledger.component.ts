import { Component, OnInit, NgZone, OnDestroy, TemplateRef } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_spiritedaway from "@amcharts/amcharts4/themes/spiritedaway";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import swal from "sweetalert2";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-general-ledger",
  templateUrl: "./general-ledger.component.html",
  styleUrls: ["./general-ledger.component.scss"],
})
export class GeneralLedgerComponent implements OnInit, OnDestroy {
  // Chart
  private chart1: any;
  private chart2: any;

  //datepicker
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();

  // Modal
  modalRef: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
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
    salary: "$320,800"
  },
  {
    accNo: "ACC-119-VLJ",
    debit: "785.51",
    credit: "795.16",
    netMove: "314.71",
    start: "2011/07/25",
    salary: "$170,750"
  },
  {
    accNo: "ACC-635-KDJ",
    debit: "107",
    credit: "22.37",
    netMove: "426.32",
    start: "2009/01/12",
    salary: "$86,000"
  },
  {
    accNo: "ACC-649-LVT",
    debit: "919",
    credit: "703",
    netMove: "562",
    start: "2012/03/29",
    salary: "$433,060"
  },
  {
    accNo: "ACC-120-MJM",
    debit: "136.34",
    credit: "916.82",
    netMove: "983.35",
    start: "2008/11/28",
    salary: "$162,700"
  },
  {
    accNo: "ACC-119-VLJ",
    debit: "785.51",
    credit: "795.16",
    netMove: "314.71",
    start: "2011/07/25",
    salary: "$170,750"
  },
  {
    accNo: "ACC-120-MJM",
    debit: "136.34",
    credit: "916.82",
    netMove: "983.35",
    start: "2008/11/28",
    salary: "$162,700"
  },
  {
    accNo: "ACC-635-KDJ",
    debit: "107",
    credit: "22.37",
    netMove: "426.32",
    start: "2009/01/12",
    salary: "$86,000"
  },
  {
    accNo: "ACC-649-LVT",
    debit: "919",
    credit: "703",
    netMove: "562",
    start: "2012/03/29",
    salary: "$433,060"
  },
  {
    accNo: "ACC-120-MJM",
    debit: "136.34",
    credit: "916.82",
    netMove: "983.35",
    start: "2008/11/28",
    salary: "$162,700"
  },
  {
    accNo: "ACC-719-MOX",
    debit: "849.19",
    credit: "754.16",
    netMove: "595.03",
    start: "2011/04/25",
    salary: "$320,800"
  },
  {
    accNo: "ACC-635-KDJ",
    debit: "107",
    credit: "22.37",
    netMove: "426.32",
    start: "2009/01/12",
    salary: "$86,000"
  },
  {
    accNo: "ACC-649-LVT",
    debit: "919",
    credit: "703",
    netMove: "562",
    start: "2012/03/29",
    salary: "$433,060"
  },
  {
    accNo: "ACC-120-MJM",
    debit: "136.34",
    credit: "916.82",
    netMove: "983.35",
    start: "2008/11/28",
    salary: "$162,700"
  },
  {
    accNo: "ACC-635-KDJ",
    debit: "107",
    credit: "22.37",
    netMove: "426.32",
    start: "2009/01/12",
    salary: "$385,750"
  },
  ];
  SelectionType = SelectionType;

  constructor(
    private zone: NgZone,
    private modalService: BsModalService,
    ) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];

    this.temp = this.rows.map((prop,key)=>{
      return {
        ...prop,
        id: key
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
      this.getChartGeneralLedger1();
      this.getChartGeneralLedger2();
    });
  }

  getChartGeneralLedger1() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_spiritedaway);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartgeneral1", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "Closed",
        litres: 501.9,
      },
      {
        country: "Opened",
        litres: 301.9,
      },
      {
        country: "Pending",
        litres: 201.1,
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);

    this.chart1 = chart;
  }

  getChartGeneralLedger2() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_spiritedaway);
    am4core.useTheme(am4themes_animated);
    // Themes end

    /**
     * Define data for each year
     */
    let chartData = {
      "2016": [
        { sector: "Pending", size: 43 },
        { sector: "Opened", size: 123 },
        { sector: "Closed", size: 283 },
      ],
      "2017": [
        { sector: "Pending", size: 34 },
        { sector: "Opened", size: 536 },
        { sector: "Closed", size: 744 },
      ],
      "2018": [
        { sector: "Pending", size: 57 },
        { sector: "Opened", size: 425 },
        { sector: "Closed", size: 538 },
      ],
      "2019": [
        { sector: "Pending", size: 33 },
        { sector: "Opened", size: 357 },
        { sector: "Closed", size: 833 },
      ],
      "2020": [
        { sector: "Pending", size: 24 },
        { sector: "Opened", size: 462 },
        { sector: "Closed", size: 649 },
      ],
    };

    // Create chart instance
    let chart = am4core.create("chartgeneral2", am4charts.PieChart);

    // Add data
    chart.data = [
      { sector: "Pending", size: 43 },
      { sector: "Opened", size: 245 },
      { sector: "Closed", size: 568 },
    ];

    // Add label
    chart.innerRadius = 100;
    let label = chart.seriesContainer.createChild(am4core.Label);
    label.text = "2020";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 30;

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "size";
    pieSeries.dataFields.category = "sector";

    // Animate chart data
    let currentYear = 2016;
    function getCurrentData() {
      let wasd = label as any;
      wasd.text = currentYear;
      let data = chartData[currentYear];
      currentYear++;
      if (currentYear > 2021) currentYear = 2016;
      return data;
    }

    function loop() {
      //chart.allLabels[0].text = currentYear;
      let data = getCurrentData();
      for (var i = 0; i < data.length; i++) {
        chart.data[i].size = data[i].size;
      }
      chart.invalidateRawData();
      chart.setTimeout(loop, 4000);
    }

    loop();

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
