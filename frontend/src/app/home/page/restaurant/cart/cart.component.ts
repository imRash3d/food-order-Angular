import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";
import { Router } from "@angular/router";
import { CartItem } from "src/app/home/types/types.model";
import { HomeService } from "src/app/home/services/home.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit, OnChanges {
  @Input() cartList: CartItem[] = [];
  subTotal = 0;
  // @Input('restaurantName') restaurantName;
  totalPrice = 0;
  delivery_fee = 50;
  deliveryDate: string;
  @Output() checkList = new EventEmitter();

  constructor(private service: HomeService, private router: Router) {}

  ngOnInit() {
    console.log("c");
  }
  ngOnChanges() {
    this.calculateSubTotal();
  }
  inc(index) {
    //Increment  CART QUANTITY
    this.cartList[index].quantity += 1;
    this.calculateSubTotal();
  }

  dec(index) {
    //DECREMENT CART QUANTITY
    this.cartList[index].quantity -= 1;
    this.calculateSubTotal(); //CALL CALCUALTE SUBTOTAL PRICE
  }

  removeCartItem(index) {
    this.cartList.splice(index, 1);
    this.calculateSubTotal();
    // this.checkList.emit(this.cartList);
    // return this.cartList;
  }

  calculateSubTotal() {
    this.subTotal = 0;
    this.cartList.forEach(c => {
      this.subTotal += Number(c.price) * c.quantity;
    });
    this.calculateTotalPrice(); //CALL CALCUALTE TOTAL PRICE
  }

  calculateTotalPrice() {
    //   CALCUALTE TOTAL PRICE
    this.totalPrice = this.subTotal + this.delivery_fee;
  }
  selectDate(date) {
    this.deliveryDate =date;
  }
  checkoutCart() {
    //CHEKOUT
    let obj = {
      restaurant_name: "King Food",
      subtotal: this.subTotal,
      delivery_fee: this.delivery_fee,
      cartList: this.cartList,
      date:this.deliveryDate,
    };
    localStorage.setItem('cartDetails',JSON.stringify(obj))
   // this.service.cartDetails.next({ cartData: obj });
    this.router.navigate(["checkout"]);
  }
}
