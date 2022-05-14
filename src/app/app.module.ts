import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LineComponent,
    AreaComponent,
    ColumnComponent,
    BarComponent,
    PieComponent,
    ScatterComponent,
    BubbleComponent,
    PackedBubbleComponent,
    SplitPackedBubbleComponent,
    StackBarComponent,
    SynchronizedComponent,
    BarTask1Component,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
