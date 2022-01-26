export class CartDetails {
  restaurant_name: string;
  cartList: FoodItem[];
  subtotal: number;
  delivery_fee: number;
}
export class User {
  $key: string;
  firstName: String;
  lastsName: String;
  email: String;
  password: String;
  mobileNumber: String;
}
export class Restaurant {
  _id: string;
  // image:string;
  name: string;
  area: RestaurantArea;
  food_item: FoodItem[];
  opening: string;
  closing: string;
}

export class FoodItem {
  _id: string;
  resturant: Restaurant;
  name: string;
  price: string;
  category: string;
}
export class CartItem {
  _id: string;
  resturant?: Restaurant;
  name: string;
  price: string;
  category: string;
  quantity:number
}

export class Order {
  cartDetails: CartDetails[];
  delivery_date: String;

  userDetails: User;
  delivery_address: string;
  message?: string;
}

export class RestaurantArea {
  _id: string;
  name: string;
}
