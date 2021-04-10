import { Component } from '@angular/core';
import { MyCounterService } from './_sevices/my-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MyCounterService]
})
export class AppComponent {
  title = 'demo';
  // hello='Hello World';
}
