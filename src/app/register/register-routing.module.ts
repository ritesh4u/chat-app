import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterMainComponent } from './components/register-main/register-main.component';


const routes: Routes = [
  {
    'path': '',
    component: RegisterMainComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
