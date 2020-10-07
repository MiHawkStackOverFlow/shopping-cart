import {Component} from '@angular/core';
import {Cart, CartItem, Product} from "../types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[];
  cart: Cart;

  constructor() {
    this.cart = {
      items: []
    } as Cart
  }

  ngOnInit() {
    this.products = [...PRODUCTS].map((product, index) => {
      product.id = index + 1;
      product.image = `/assets/images/items/${product.name.toLocaleLowerCase()}.png`;
      product.cartQuantity = 0;
      return product;
    });
  }

  addToCart(product: Product) {
    const { length } = this.cart.items;
    const id = length + 1;
    const found = this.cart.items.some(el => el.id === product.id);
    if(!found) {
      let cartItem: CartItem = {
        id: product.id,
        item: product.name,
        quantity: product.cartQuantity
      }  
      this.cart.items.push(cartItem);
    }
  }

  updateCart(product: Product) {
    let index = this.cart.items.findIndex((item) => item.id === product.id);
    if (index === -1) {
      let cartItem: CartItem = {
        id: product.id,
        item: product.name,
        quantity: product.cartQuantity
      }  
      this.cart.items.push(cartItem);
    } else {
      if(product.cartQuantity === 0) {
        this.cart.items.splice(index, 1);
      } else {
        this.cart.items[index].quantity = product.cartQuantity;
      }
    }
  }
}


export const PRODUCTS: Product[] = [
  {
    name: "Cap",
    price: 5
  },
  {
    name: "HandBag",
    price: 30
  },
  {
    name: "Shirt",
    price: 35
  },
  {
    name: "Shoe",
    price: 50
  },
  {
    name: "Pant",
    price: 35
  },
  {
    name: "Slipper",
    price: 25
  }
];
