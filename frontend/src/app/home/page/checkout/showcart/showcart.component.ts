import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/home/types/types.model';



@Component({
  selector: 'showcart',
  templateUrl: './showcart.component.html',
  styleUrls: ['./showcart.component.css']
})
export class ShowcartComponent implements OnInit {
  subTotal:number;
  deliveryFee:number;
  cartList:CartItem []= []
  constructor() { }

  ngOnInit() {
    const obj  = JSON.parse(localStorage.getItem('cartDetails'));
    console.log(obj)
    this.cartList = obj.cartList;
    this.deliveryFee = obj.delivery_fee;
    this.subTotal = obj.subtotal;
    
  }


}
