import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.data.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // cart object is provided to component as dependency injection
  // the same cart object is shared between 2 components: store, cart
  constructor(public cart: Cart) { }

  ngOnInit() {
  }

}
