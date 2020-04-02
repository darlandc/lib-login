import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetModule } from './reset/reset.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { ResetComponent } from './reset/reset.component';
import { ResetService } from './reset/reset.service';

@NgModule({
  declarations: [
    LoginComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    ResetModule,
    HttpClient,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    ResetService
  ],
  exports: [
    LoginComponent,
    ResetComponent
  ]
})
export class LoginModule { }
