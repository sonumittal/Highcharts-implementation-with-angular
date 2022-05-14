import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BubbleAreaService{

  constructor() { }

  private subject = new Subject<any>();
  private headerSubject = new Subject<any>();


  selectionData = { area: null}
  setSelection(data: any) {
    console.log('data',data);
    if (data.area1 != undefined) {
      this.selectionData.area = data.area1;
      console.log('selectionData',this.selectionData.area);
    }
    console.log("sel",this.selectionData);
    this.headerSubject.next({ data2: this.selectionData });
  }

  getSelection(): Observable<any> {
    // console.log('getSelectin',this.headerSubject.asObservable());
    return this.headerSubject.asObservable();
  }

}

