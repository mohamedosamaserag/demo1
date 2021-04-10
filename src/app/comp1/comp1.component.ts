import { Component, OnInit } from '@angular/core';
import { MyCounterService } from '../_sevices/my-counter.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  // providers:[MyCounterService]
})
export class Comp1Component implements OnInit {

  constructor(public obj1:MyCounterService) { }

  increase(){
    this.obj1.add();
  }
  ngOnInit(): void {
  }

}
