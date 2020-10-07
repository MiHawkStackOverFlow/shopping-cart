import {Component, Input, OnInit} from '@angular/core';
import {Cart} from "../../types";
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cart: Cart;

  constructor() {  }

  ngOnInit() {
    
  }

}
