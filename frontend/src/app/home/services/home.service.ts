import { Injectable } from "@angular/core";
import { HttpService } from "src/app/modules/http-with-injector/http.service";
import { CartItem } from "../types/types.model";
import { BehaviorSubject } from "rxjs";

export interface CartDetails {
  cartData: any;
}

@Injectable({
  providedIn: "root"
})
export class HomeService {
  private subject: CartDetails = { cartData:null };
  cartDetails=new BehaviorSubject(this.subject);
  constructor(private http: HttpService) {}

  getArea() {
    return this.http.get("area").toPromise();
  }
  searchRestaurant(id) {
    return this.http.get("restaurant?area=" + id).toPromise();
  }
  getFoodItems(id) {
    return this.http.get("food-menu?restaurant_id=" + id).toPromise();
  }
}
