import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { RestaurantService } from "../../services/restaurant.service";
import { FoodItem, CartItem } from "../../types/types.model";
import { ActivatedRoute } from "@angular/router";
import { HomeService } from "../../services/home.service";
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: "app-restaurant",
  templateUrl: "./restaurant.component.html",
  styleUrls: ["./restaurant.component.css"]
})
export class RestaurantComponent implements OnInit, OnDestroy {
  @ViewChild("cart") cartComponent: CartComponent;
  subtotal = 0;
  delivery_fee = 60;
  total = 0;
  area_code;
  food_items: FoodItem[] = [];
  cartList: CartItem[] = [];
  constructor(private service: HomeService, private route: ActivatedRoute) {
    if (this.route.snapshot.params.id) {
      this.service.getFoodItems(this.route.snapshot.params.id).then(res => {
        this.food_items = res.data;
      });
    }
  }

  ngOnInit() {
    // this.restaurantService.recive_restaurant_obj.subscribe(
    //   res => {
    //     (this.restaurant = res.restaurant), (this.area_code = res.area_code);
    //   },
    //   error => console.log(error)
    // );
    // this.getLocation();
  }

  getDishCategory(items) {
    // delete items.name;

    let list = [];
    for (let i in items) {
      if (typeof items[i] == "object") list.push(items[i]);
    }

    return list;
  }

  selectDish(dish: FoodItem) {
    let obj = {
      _id: dish._id,
      name: dish.name,
      price: dish.price,
      quantity: 1,
      category: dish.category
    };
    this.cartList.push(obj);
    this.cartComponent.calculateSubTotal();
  }

  checKCartList(updateList) {
    //UPDATE CARTARRY WHEN REMOVE CART ITEM IN CHILD COMPONENT
    // this.dishIList = updateList;
    // this.dishItem = updateList;
  }

  getLocation() {
    // GET LOCATION NAME & STORE IN LOCAL STORAGE
    // this.subscription = this.addressService.getAddress().subscribe(res => {
    //   for (let key in res) {
    //     if (key == this.area_code)
    //       localStorage.setItem("location", res[this.area_code]);
    //   }
    // });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
