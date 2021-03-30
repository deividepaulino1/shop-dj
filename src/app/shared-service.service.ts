import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  tempData: any = [] ;
  private sampleData = new BehaviorSubject<any[]>([]);
  sampleData$ = this.sampleData.asObservable();
  constructor() { }

  // to push new values
  // tslint:disable-next-line:typedef
  setItemData(data) {
    if (this.tempData.some(obj => obj.name === data.name)) {
      alert('Item is already in the cart.');
    } else {
      this.tempData.push(data);
      this.sampleData.next(this.tempData);
    }
  }

  // to get Values
  // tslint:disable-next-line:typedef
  getItemData() {
    return this.sampleData$;
  }

  // tslint:disable-next-line:typedef
  deleteItemData(data) {
    this.tempData = this.tempData.filter(element => {
      if (element.name === data.name) {
        element.status = '';
      }
      return element.name !== data.name;
    });
    this.sampleData.next(this.tempData);
  }
  // tslint:disable-next-line:typedef
  clearData() {
    this.tempData.forEach(element => {
      element.status = '';
    });
    this.tempData = [];
    this.sampleData.next(this.tempData);
  }
}
