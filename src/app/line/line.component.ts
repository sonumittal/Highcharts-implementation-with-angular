import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import More from 'highcharts/highcharts-more';
// import exporting from 'highcharts/modules/exporting';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
pointValue:any;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.plotChart();

  
  }

  public options: any = {
    chart: {
      type: 'line',
    },
    credits:{
      // enabled:false,
      text:"Credit: Sonu Mittal",
      href:"google.com",
      position:{
          // align:'left',
          x:0,
      },
      style:{
        fontSize:'16px',
        },
        },  
        
        // tooltip styling
tooltip:{
  // animation:false,
  backgroundColor:'#eee',
  borderColor:'green',
  borderRadius:10,// byDefault it is 5
  // followPointer:true,
  // shared:true, // at the same x axis pioint data of all icon  will be highlighted
  
  style:{
  color:'#000',
  },
  },
  // end of tooltip styling

  // icon color if here after 4 color is finish for some data then repete again
colors:['skyblue','black','pink','green','gray'],
// end of icon color
        
    subtitle: {
      text: 'Source: thesolarfoundation.com',
    },

    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016',
      },

    yAxis: {
      title: {
        text: 'Number of Employees',
      },
    },

    xAxis: {
      // categories:['Apple','Banana','orange'],
      title: {
        text: 'Years',
      },
      
      accessibility: {
        rangeDescription: 'Range: 2010 to 2022',
      },
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2011,
      },
    },
    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
         },
    // {
    //     name: 'Manufacturing',
    //     data: [24916, 24064, 29742, 29851, -32490, 30282, 38121, 40434],
    //     negativeColor:'red' // represting negative data in red color
    // }, {
    //     name: 'Sales & Distribution',
    //     data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    // }, {
    //     name: 'Project Development',
    //     data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    // }, {
    //     name: 'Other',
    //     data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    // }
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };

  

  selectArea(value:any){
    // console.log(this.pointValue.series[0].data[0])
    // console.log(this.pointValue.series[0])
    console.log(this.pointValue)

var value2=this.pointValue.series[0].data;
console.log('value1=',value);
let i=0;     
    value2.forEach((element:any)=>{
      console.log(element);
 
if(element.y==value){
  this.pointValue.series[0].data[i].select(false,false);
  
  this.pointValue.series[0].data[i].select(true,true);
  // this.pointValue.series[0].data[i].color='red';
  
}
i++;
    })
  }

  select(param:any){
    if(param == 1){
    console.log(this.pointValue.series[0].data[2]);
    this.pointValue.series[0].data[2].select(true,true);
    }
    else    
    this.pointValue.series[0].data[2].select(false,false);
  }
  plotChart(){
    this.pointValue=Highcharts.chart('container',this.options);
    }

}
