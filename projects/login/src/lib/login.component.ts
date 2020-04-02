import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-login',
  template: `
    <p>
      login works!
    </p>
    <br>
    <lib-reset (eventSendData)="checkEventSendData()"></lib-reset>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkEventSendData() {
    console.log('check evnet sned data');
  }


}
