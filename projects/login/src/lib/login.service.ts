import { ResetService } from './reset/reset.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_URL = 'http://localhost:3000/';

  constructor(
    private reset: ResetService,
    private http: HttpClient
    ) {}

  doLogin() {
    const headers = {};
    return this.http.get(`${this.API_URL}`, headers);
  }

  autoLogin() {
    const headers = {};
    return this.http.get(`${this.API_URL}`, headers);
  }


}
