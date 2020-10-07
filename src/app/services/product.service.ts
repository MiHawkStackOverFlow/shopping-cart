import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private cartArray = new BehaviorSubject<Product[]>([]);
  cartArrayChanges$ = this.cartArray.asObservable();

  public addToCart(item: Product) {
    const currentValue = this.cartArray.value;
    const updatedValue = [...currentValue, item];
    this.cartArray.next(updatedValue);
  }
}
