import { Component, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'generic';

  @Output() status = new EventEmitter();

  checkStatus(event) {
    console.log('checking status' + event);
  }
}
