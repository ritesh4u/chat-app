import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginMainComponent } from './components/login-main/login-main.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LoginMainComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
