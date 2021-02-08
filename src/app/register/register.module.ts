import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterMainComponent } from './components/register-main/register-main.component';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [RegisterMainComponent],
  imports: [
    CommonModule,
    SharedModule,
    RegisterRoutingModule,
  ]
})
export class RegisterModule { }
