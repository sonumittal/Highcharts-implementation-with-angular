import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import More from 'highcharts/highcharts-more';
// import exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-bar-task1',
  templateUrl: './bar-task1.component.html',
  styleUrls: ['./bar-task1.component.css']
})
export class BarTask1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.plotChart();
  }
  public options: any = {
    chart: {
      type: 'bar',
      height: 590,
  },
  title: {
      // text: 'Historic World Population by Region'
      text: null,
  },
  subtitle: {
      text: 'SELECT REGION',
      align: 'left',
  },
  xAxis: {
    lineWidth:0,
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania','India'], 
      crosshair: true, //hover effect on bar
      title: {
          // text: 'Country',     
           text: null,   
      },
      labels: {
        x: 4,
        y: -32,
        align: 'left',
      //   style: {
      //     color: 'red'
      // }
      },
      
      
  },
  yAxis: {
      min: 0,
      title: {
          // text: 'Population (millions)',
          // align: 'high'
          text:null,
      },
      labels: {
          overflow: 'justify',
          enabled: false, //---hide bottom all text
          
      },   
     
      visible: false, 
  
       
  },
  legend: {
 enabled: false,
  },
  tooltip: {    
      valueSuffix: ' millions',
      enabled:false,
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true, 
          },
      },
      series: {
        pointWidth:25,
        cursor: 'pointer',
        point: {
            events: {
              click: function (event:any) {
                // alert(' clicked\n' +this.category);
                alert(' clicked\n');
                },
                // mouseOver: function (event:any) {
                //   alert(' clicked\n');
                //   }
            }
        },
        dataLabels: {
          // color: '#FFFFFF',
          align: 'left',
          enabled: true,
          inside: true,
          x:0,
          y:-24,
      },
      // color: 'orange',
      // grouping: false
    }
  },


  // legend: {
  //     layout: 'vertical',
  //     align: 'right',
  //     verticalAlign: 'top',
  //     x: -40,
  //     y: 80,
  //     floating: true,
  //     borderWidth: 1,
  //     // backgroundColor:
  //     //     Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
  //     shadow: true
  // },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Year 1800',
      data: [10,20,30,40,50,60],
    //   color:'red',
  }, ]
  }
  plotChart(){
    Highcharts.chart('container',this.options);
    }
}

