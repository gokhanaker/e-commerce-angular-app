import { Component, OnInit } from '@angular/core';
import { OrderData } from '../model/order.data';
import { Order } from '../model/order.data.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderSent = false;
  submitted = false;
  constructor(public orderData: OrderData,
                public order: Order) {}

  submitOrder(form: NgForm) {
      this.submitted = true;
      if (form.valid) {
          this.orderData.saveOrder(this.order).subscribe(order => {
            this.order.clear();
            this.orderSent = true;
            this.submitted = false;
        });
      }
  }

  ngOnInit() {
  }

}
