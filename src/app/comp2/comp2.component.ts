import { Component, OnInit } from '@angular/core';
import { MyCounterService } from '../_sevices/my-counter.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  // providers:[MyCounterService]
})
export class Comp2Component implements OnInit {

  constructor(public obj2:MyCounterService) { }

  Decrease(){
    this.obj2.sub();
  }
  ngOnInit(): void {
  }

}
