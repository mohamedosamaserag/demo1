import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyCounterService {

  public n:number;
  add(){
    this.n++;
  }

  sub(){
    this.n--;
  }
  constructor() { 
    this.n=0; 
  }
}
