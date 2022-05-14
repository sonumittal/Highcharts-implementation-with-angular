import { Component, OnInit } from '@angular/core';
import { BubbleAreaService } from './../../services/bubble-area.service';
import {ActivatedRoute} from '@angular/router';


declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
link1:any;
selectedAreaName = 'World';

  constructor(private sharedDaraService:BubbleAreaService,
    private route: ActivatedRoute,
    ) { 
      

    }



  ngOnInit(): void {
   
  
 
  }
  ngAfterViewInit():void{
   
  }

  selectArea(value:any){
    this.sharedDaraService.setSelection({'area1': value}); 
  }
  
  active(value:any){
    // $(document).ready(function() {
    //   $(".nav-link").click(function () {
    //       $(".nav-link").removeClass("active");  
    //       $(".nav-link").addClass("active");  
    //   });
    //   });
  }

  myHome(){
this.link1='../../../assets/images/Highcharts.png';
  }
}
