import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant.component';
import { CartComponent } from './cart/cart.component';
import { DatePickerModule } from 'src/app/modules/date-picker/date-picker.module';
const routes:Routes =[
  {path:'',component:RestaurantComponent}
]
@NgModule({
  declarations: [RestaurantComponent, CartComponent],
  imports: [
    CommonModule,
    DatePickerModule,
    RouterModule.forChild(routes)
  ]
})
export class RestaurantModule { }
