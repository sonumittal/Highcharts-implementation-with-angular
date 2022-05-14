import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
// import exporting from 'highcharts/modules/exporting';
More(Highcharts)

declare var $: any;
@Component({
  selector: 'app-stack-bar',
  templateUrl: './stack-bar.component.html',
  styleUrls: ['./stack-bar.component.css']
})
export class StackBarComponent implements OnInit {
  pointValue:any;
  range = "top20_";
  dataRange:any=[];
  categories = ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas', 'Pineapple','Mango','Coconut','Guava','Almond','Apples-2', 'Oranges-2', 'Pears-2', 'Grapes-2', 'Bananas-2', 'Pineapple-2','Mango-2','Coconut-2','Guava-2','Almond-2','Almond-3']

  data = [{
    name: 'Sonu',
    data: [1, 3, 4, 7,2,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
         pointWidth: 20,
    }
    , {
        name: 'Jane',
        data: [2,4,1,2,8,2,3,4,5,6,7,8,9,10,11,14,13,14,35,16,17],
        pointWidth: 20,
    }, {
        name: 'John',
        data: [5,4,3,2,3,2,3,4,5,6,7,8,9,10,11,12,13,14,15,32,17],
        pointWidth: 20,
    }, {
        name: 'Joe',
        data: [8,2,1,1,5,2,3,4,5,6,7,8,9,10,11,78,13,14,15,16,17],
        pointWidth: 20,
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.plotChart();
  }
  public options: any = {
    chart: {
      type: 'bar',
  // height:900,
  },
  title: {
      text: 'Stacked bar chart'
  },
  xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas', 'Pineapple','Mango','Coconut','Guava','Almond','Apples-2', 'Oranges-2', 'Pears-2', 'Grapes-2', 'Bananas-2', 'Pineapple-2','Mango-2','Coconut-2','Guava-2','Almond-2','Almond-3']
  },
  yAxis: {
      // min: 0,
      // max:1this.pointValue
  },
  // tooltip: {
  //     pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
  //     shared: true
  // },
  legend: {
      reversed: true
  },
  plotOptions: {
      series: {
          stacking: 'percent'
          // stacking: 'normal'
      }
  },
  series: [{
      name: 'Sonu',
      data: [1, 3, 4, 7,2,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
           pointWidth: 20,
  }
  , {
      name: 'Jane',
      data: [2,4,1,2,8,2,3,4,5,6,7,8,9,10,11,14,13,14,35,16,17],
      pointWidth: 20,
  }, {
      name: 'John',
      data: [5,4,3,2,3,2,3,4,5,6,7,8,9,10,11,12,13,14,15,32,17],
      pointWidth: 20,
  }, {
      name: 'Joe',
      data: [8,2,1,1,5,2,3,4,5,6,7,8,9,10,11,78,13,14,15,16,17],
      pointWidth: 20,
  }
]
  }
  plotChart(){
    console.log("============", this.range)
      let temp_data_xAxis:any=this.categories
      let temp_data_series:any=this.data

      let temp_data_xAxis2:any = [];
      let temp_data_series2:any = [];
      let temp:any=[];


      switch (this.range.split('_')[0]) {
        case 'top20':
          temp_data_xAxis2 = temp_data_xAxis.slice(0,5)
          temp = temp_data_series
          temp.forEach((element:any,i:any)=>{
            temp_data_series2.push({data:element.data.slice(0,5),name:element.name,pointWidth:element.pointWidth})
          })
          break;

        case 'bottom20':
          temp_data_xAxis2 = temp_data_xAxis.reverse().slice(0,10)
          temp = temp_data_series
          temp.forEach((element2:any,j:any)=>{
              temp_data_series2.push({data: element2.data.reverse().slice(0,10),name:element2.name,pointWidth:element2.pointWidth})
            })
          break;
          case 'gt':
                // // console.log("gtr:: ", temp_chart_data, this.range)
                // temp_chart_data = temp_chart_data.filter((a,b) => Number(a.Value) > Number(this.range.split('_')[1]))
                // getRange = temp_chart_data.map((a,b) => a.Value)
                // // obj = {"min": Math.min(...getRange), "max": Math.max(...getRange)}
                // this.minMax = obj;
                // // console.log("minMax:: ", this.minMax)
                // temp_chart_data.forEach((element) => {
                //   areaObj.push({ "name": element.Country, "code": element.area_code})
                //   tp.push(element.TP)
                // })
                // // console.log(areaObj)
                // this.areaList = areaObj.sort(function(a,b) { if(a.name < b.name) { return -1 } })
                // // $('#minRange').text(this.minMax.min)
                // // $('#maxRange').text(this.minMax.max)
                // console.log("areaList", this.areaList)
                break;
              case 'lt':                
                // temp_chart_data = temp_chart_data.filter((a,b) => Number(a.Value) < Number(this.range.split('_')[1]))
                // getRange = temp_chart_data.map((a,b) => a.Value)
                // // obj = {"min": Math.min(...getRange), "max": Math.max(...getRange)}
                // this.minMax = obj;
                // temp_chart_data.forEach((element) => {
                //   areaObj.push({ "name": element.Country, "code": element.area_code})
                //   tp.push(element.TP)
                // })
                // // console.log(areaObj)
                // this.areaList = areaObj.sort(function(a,b) { if(a.name < b.name) { return -1 } })
                // // $('#minRange').text(this.minMax.min)
                // // $('#maxRange').text(this.minMax.max)
                break;
              case 'bt':
                // temp_chart_data = temp_chart_data.filter((a,b) => Number(a.Value) >= Number(this.range.split('_')[1]) && Number(a.Value) <= Number(this.range.split('_')[2]))
                
                // getRange = temp_chart_data.map((a,b) => a.Value)
                // // console.log("--->", temp_chart_data, getRange)
                // // obj = {"min": Math.min(...getRange), "max": Math.max(...getRange)}
                // this.minMax = obj;
                // temp_chart_data.forEach((element) => {
                //   areaObj.push({ "name": element.Country, "code": element.area_code})
                //   tp.push(element.TP)
                // })
                // // console.log(areaObj)
                // this.areaList = areaObj.sort(function(a,b) { if(a.name < b.name) { return -1 } })
                // // $('#minRange').text(this.minMax.min)
                // // $('#maxRange').text(this.minMax.max)
                break;
                case 'all':
                  temp_data_xAxis2 = temp_data_xAxis;
                  temp = temp_data_series
                   temp.forEach((element2:any,j:any)=>{
                      temp_data_series2.push({data: element2.data,name:element2.name,pointWidth:element2.pointWidth})
                    })
                  break;
           default:
          temp_data_xAxis2 = temp_data_xAxis;
          temp = temp_data_series
           temp.forEach((element2:any,j:any)=>{
              temp_data_series2.push({data: element2.data,name:element2.name,pointWidth:element2.pointWidth})
            })
        } 
 
        console.log("series", temp_data_series2, temp_data_xAxis2)
        this.options.xAxis.categories=temp_data_xAxis2;
        this.options.series= temp_data_series2;

      this.pointValue=Highcharts.chart('container',this.options);
  
    }

  selectStack(value:any){
    console.log(value);
    // console.log(this.pointValue.series[0].data[0])
    // console.log(this.pointValue.series[0])
    console.log(this.pointValue)
    this.pointValue.series.forEach((element:any,i:any)=>{
      element.data.forEach((element2:any, j:any)=>{
        if(element2.category==value){
			// console.log('bye',element2.category);
			this.pointValue.series[i].data[j].select(false,false);
			this.pointValue.series[i].data[j].select(true,true);
			// this.pointValue.series[i].data[j].color='skyblue';
			console.log(this.pointValue.series[i].data[j]);
        }
     
      })
    })
    }


    isNumberKey(evt:any){
      console.log(evt)
      var charCode = (evt.which) ? evt.which : evt.keyCode
      if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
        return false;
      return true;
    }


  
    filterModal(){
      $('#filterOptions').on('click', function(){
        var selectedFilter = $("input[name='filter']:checked").val();
        console.log("opt:: ", selectedFilter)
        if(selectedFilter == 'gt'){
  
          $('#btw-to').val('')
          $('#btw-fr').val('')
          $('#grt').attr('disabled', false)
          $('#les').attr('disabled', true)
          $('#btw-to').attr('disabled', true)
          $('#btw-fr').attr('disabled', true)
          // $('#grt').css('background', '#FFFFFF')
        }
        if(selectedFilter == 'lt'){
          $('#grt').val('')
          $('#btw-to').val('')
          $('#btw-fr').val('')
          $('#les').attr('disabled', false)
          $('#grt').attr('disabled', true)
          $('#btw-to').attr('disabled', true)
          $('#btw-fr').attr('disabled', true)
        }
        if(selectedFilter == 'bt'){
          $('#grt').val('')
          $('#les').val('')
          $('#btw-to').attr('disabled', false)
          $('#btw-fr').attr('disabled', false)
          $('#grt').attr('disabled', true)
          $('#les').attr('disabled', true)
        }
        if(selectedFilter == 'all' || selectedFilter == 'top20' || selectedFilter == 'bottom20' ){
          $('#grt').val('')
          $('#les').val('')
          $('#btw-to').val('')
          $('#btw-fr').val('')
  
          $('#grt').attr('disabled', true)
          $('#les').attr('disabled', true)
          $('#btw-to').attr('disabled', true)
          $('#btw-fr').attr('disabled', true)
        }
      })
    }

    ngAfterViewInit() {
let cobj = this;
      $('#btnApply').click(function() {
        var selectedFilter = $("input[name='filter']:checked").val();
        console.log(selectedFilter, "=====")

        if(
          (selectedFilter == 'gt' && ($('#grt').val() == undefined || $('#grt').val() == '')) ||
          (selectedFilter == 'lt' && ($('#les').val() == undefined || $('#les').val() == '')) ||
          (selectedFilter == 'bt' && ($('#btw-fr').val() == undefined || $('#btw-fr').val() == '') && ($('#btw-to').val() == undefined || $('#btw-to').val() == ''))
        ){
          alert("Value required to filter")
          // return false
        }
      
        if(selectedFilter == 'bt' && ($('#btw-fr').val() != undefined || $('#btw-fr').val() != '') && ($('#btw-to').val() != undefined || $('#btw-to').val() != '') ){
          // console.log( Number($('#btw-fr').val()),' ---- ' , Number($('#btw-to').val()) )
          if( Number($('#btw-fr').val()) >= Number($('#btw-to').val()) ){
            alert("Invalid filter values")
            $('#btw-to').val('')
            $('#btw-fr').val('')
            // return false
          }
        }

			switch(selectedFilter) {
				case 'top20':
					$("#filterSelection").html('Top 20 countries');
					cobj.range = selectedFilter+"_"+$('#grt').val()
					console.log(cobj.range);
					break;
				case 'bottom20':
					$("#filterSelection").html('Bottom 20 countries');
					cobj.range = selectedFilter+"_"+$('#les').val()
					break;
          case 'gt':
            $("#filterSelection").html('Greater than '+$('#grt').val()+' countries');
            cobj.range = selectedFilter+"_"+$('#grt').val()
            break;
          case 'lt':
            $("#filterSelection").html('Less than '+$('#les').val()+' countries');
            cobj.range = selectedFilter+"_"+$('#les').val()
            break;
          case 'bt':
            $("#filterSelection").html('Between '+$('#btw-fr').val()+" and "+$('#btw-to').val()+' countries');
            cobj.range = selectedFilter+"_"+$('#btw-fr').val()+"_"+$('#btw-to').val()
            // console.log("range", this.range)
            break;
				case 'all':
					$("#filterSelection").html('All countries');
          cobj.range = selectedFilter+"_all"
					break;
				default:
					cobj.range = selectedFilter+"_all"
			}
        //--------------------------------
        cobj.plotChart();
      })
      cobj.plotChart();
    }
  }