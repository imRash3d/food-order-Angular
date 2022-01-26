import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from './search-result.component';
import { SearchresultService } from '../../services/searchresult.service';
import { RestaurantService } from '../../services/restaurant.service';
const routes: Routes = [
  {
    path: "",
    component:SearchResultComponent
  
  },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchResultComponent],
  providers:[SearchresultService,RestaurantService]
})
export class SearchResultModule { }
