import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeaderComponent } from './layout/header/header.component';
import { LineComponent } from './line/line.component';
import { AreaComponent } from './area/area.component';
import { ColumnComponent } from './column/column.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { ScatterComponent } from './scatter/scatter.component';
import { BubbleComponent } from './bubble/bubble.component';
import { PackedBubbleComponent } from './packed-bubble/packed-bubble.component';
import { SplitPackedBubbleComponent } from './split-packed-bubble/split-packed-bubble.component';
import { StackBarComponent } from './stack-bar/stack-bar.component';
import { SynchronizedComponent } from './synchronized/synchronized.component';
import { BarTask1Component } from './bar-task1/bar-task1.component';


const routes: Routes = [
  // {path:'',component: HeaderComponent},
  {path:'line',component: LineComponent},
  {path:'area',component: AreaComponent},
  {path:'column',component: ColumnComponent},
  {path:'bar',component: BarComponent},
  {path:'pie',component: PieComponent},
  {path:'scatter',component: ScatterComponent},
  {path:'bubble',component: BubbleComponent},
  {path:'packedBubble',component: PackedBubbleComponent},
  {path:'splitPackedBubble',component: SplitPackedBubbleComponent},
  {path:'bubble',component: BubbleComponent},
  {path:'stack-bar',component: StackBarComponent},
  {path:'synchronized',component: SynchronizedComponent},
  {path:'bar/bar-task1',component: BarTask1Component},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
