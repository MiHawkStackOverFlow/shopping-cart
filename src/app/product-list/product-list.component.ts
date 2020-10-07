import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product, UpdateMode} from "../../types";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onAddToCart: EventEmitter<Product> = new EventEmitter();
  @Output() onQuantityUpdate: EventEmitter<Product> = new EventEmitter();

  ngOnInit() {}

  addToCart(product: Product) {
    this.updateCart(product, 'add');
    this.onAddToCart.next(product);
  }

  updateCart(product: Product, operation: string) {
    if(operation === 'add') {
      product.cartQuantity = product.cartQuantity + 1; 
      this.onQuantityUpdate.next(product);
    } else {
      if(product.cartQuantity > 0) {
        product.cartQuantity = product.cartQuantity - 1; 
        this.onQuantityUpdate.next(product);
      }
    }
  }
}


