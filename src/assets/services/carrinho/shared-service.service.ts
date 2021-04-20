import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  total = 0;
  public tempData: any = [] ;
  public sampleData = new BehaviorSubject<any[]>([]);
  sampleData$ = this.sampleData.asObservable();
  constructor() { }

  // to push new values
  
  setItemData(data) {
    if (this.tempData.some(obj => obj.name === data.name)) {
      alert('Produto já esta no carrinho');
    } else {
      this.tempData.push(data);
      this.sampleData.next(this.tempData);
    }
  }

  // to get Values
 
  getItemData() {
    return this.sampleData$;
  }

 
  deleteItemData(data) {
    this.tempData = this.tempData.filter(element => {
      if (element.name === data.name) {
        element.status = '';
      }
      return element.name !== data.name;
    });
    this.sampleData.next(this.tempData);
  }
 
  clearData() {
    this.tempData.forEach(element => {
      element.status = '';
    });
    this.tempData = [];
    this.sampleData.next(this.tempData);
  }

  getPricePastel(data) {


    for (let i = 0; i < this.tempData.length; i++) {
      this.sampleData.next(this.tempData);
  

      this.total += (this.tempData[i].price);

      console.log(this.total);
      // output: coluna especifica


    }
    return;
  }



}
