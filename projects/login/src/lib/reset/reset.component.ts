import { LoginService } from './../login.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-reset',
  template: `
    <p>
      reset works!
    </p>
    <br>
    <button (click)="sendData()"></button>
  `,
  styles: []
})
export class ResetComponent implements OnInit {

  @Output() eventSendData = new EventEmitter();
  res: string;

  constructor(private login: LoginService) {
   }

  ngOnInit() {
    // this.eventSendData.emit(this.res);
    this.login.autoLogin().subscribe(
      res => {
        alert(res);
      },
      err => {
        alert(err);
      }
    );

  }

  sendData(res) {
    console.log('send data  ' + res);
  }


}
