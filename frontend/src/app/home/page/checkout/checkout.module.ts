import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShowcartComponent } from './showcart/showcart.component';
const routes: Routes = [
  {
    path: "",
    component:CheckoutComponent
  
  },
]
@NgModule({
  declarations: [CheckoutComponent , ShowcartComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckoutModule { }
