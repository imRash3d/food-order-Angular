import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
// const Routing:Routes=[
//   // {path:'', component:UserComponent,
//   // children:[
//   //     {path:'',component:HomeComponent},
//   //     {path:'restaurants/searc-result',component:SearchResultComponent},
//   //      {path:'restaurants/:id',component:RestaurantComponent},
//   //      {path:'login',component:AuthenticationComponent},
//   //      {path:'checkout',component:CheckoutComponent}
//   // ]}
// ]
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        loadChildren: "./page/home-page/home-page.module#HomePageModule"
      },
      {
        path: "restaurant/:id",
        loadChildren:
          "./page/restaurant/restaurant.module#RestaurantModule"
      },
      {
        path: "restaurants",
        loadChildren:
          "./page/search-result/search-result.module#SearchResultModule"
      },
      {
        path: "checkout",
        loadChildren:
          "./page/checkout/checkout.module#CheckoutModule"
      },
    
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
