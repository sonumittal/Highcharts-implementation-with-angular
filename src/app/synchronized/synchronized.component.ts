import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
// import exporting from 'highcharts/modules/exporting';
More(Highcharts)

@Component({
  selector: 'app-synchronized',
  templateUrl: './synchronized.component.html',
  styleUrls: ['./synchronized.component.css']
})
export class SynchronizedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.plotChart();
  }
  public options: any = {
  //   chart: {
  //     marginLeft: 40, // Keep all charts left aligned
  //     spacingTop: 20,
  //     spacingBottom: 20
  // },
  // title: {
  //     text: dataset.name,
  //     align: 'left',
  //     margin: 0,
  //     x: 30
  // },
  // credits: {
  //     enabled: false
  // },
  // legend: {
  //     enabled: false
  // },
  // xAxis: {
  //     crosshair: true,
  //     events: {
  //         setExtremes: syncExtremes
  //     },
  //     labels: {
  //         format: '{value} km'
  //     }
  // },
  // yAxis: {
  //     title: {
  //         text: null
  //     }
  // },
  // tooltip: {
  //     positioner: function () {
  //         return {
  //             // right aligned
  //             x: this.chart.chartWidth - this.label.width,
  //             y: 10 // align to title
  //         };
  //     },
  //     borderWidth: 0,
  //     backgroundColor: 'none',
  //     pointFormat: '{point.y}',
  //     headerFormat: '',
  //     shadow: false,
  //     style: {
  //         fontSize: '18px'
  //     },
  //     valueDecimals: dataset.valueDecimals
  // },
  // series: [{
  //     data: dataset.data,
  //     name: dataset.name,
  //     type: dataset.type,
  //     color: Highcharts.getOptions().colors[i],
  //     fillOpacity: 0.3,
  //     tooltip: {
  //         valueSuffix: ' ' + dataset.unit
  //     }
  // }]

  }
  plotChart(){
    Highcharts.chart('chartDiv',this.options);
    }
}
