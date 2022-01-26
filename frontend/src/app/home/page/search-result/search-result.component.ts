import { Component, OnInit, OnDestroy } from "@angular/core";
import { Restaurant } from "../../types/types.model";
import { SearchresultService } from "../../services/searchresult.service";
import { RestaurantService } from "../../services/restaurant.service";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { HomeService } from "../../services/home.service";

@Component({
  selector: "restaurent-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.css"]
})
export class SearchResultComponent implements OnInit, OnDestroy {
  area_code;
  filterMode = false;
  restaurantList: Restaurant[] = [];
  restaurants: Restaurant[] = [];
  // subscribtion: Subscription;

  constructor(
    private service: HomeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    if (this.route.snapshot.queryParams.search) {
      this.service
        .searchRestaurant(this.route.snapshot.queryParams.search)
        .then(res => {
          this.restaurants = res.data;
        });
    }
  }

  ngOnInit() {
    // this.searchResult.castareaCode.subscribe(res => {
    //   if (!res) this.router.navigate([""]);
    //   //IF ANY ERROR BACK TO HOME PAGE
    //   else {
    //     this.area_code = res;
    //     this.getAllRestaurents(res);
    //   }
    // });
  }

  enableFilterMode() {
    // ENABLE FILTER MODE
    if (!this.filterMode) this.filterMode = true;
    else this.filterMode = false;
  }

  getAllRestaurents(area_code) {
    //FIND RESTAURANT ACCORDING TO AREA CODE
    //  this.searchResult.getRestaurants(area_code).subscribe(
    //   res => {
    //     if (res) {
    //       for (let key in res) {
    //         let r = {
    //           $key: key,
    //           image: res[key].image,
    //           name: res[key].name,
    //           address: res[key].address,
    //           food_item: res[key].food_item
    //         };
    //         this.restaurantList.push(r as Restaurant);
    //       }
    //     } else {
    //       //IF ANY ERROR BACK TO HOME PAGE
    //       this.router.navigate([""]);
    //     }
    //   },
    //   err => console.log(err)
    // );
    // this.FilterRestaurantArray = this.restaurantList;
  }

  navigate(id) {
 //   SELECT RESTAURANT
 
    this.router.navigate(["restaurant/" + id]);
  }

  ngOnDestroy() {
    // if (this.subscribtion) {
    //   this.subscribtion.unsubscribe(); // UNSUBSCRIBE
    // }
  }
}
