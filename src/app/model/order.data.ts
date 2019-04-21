import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Order } from './order.data.model';
import { ProductData } from './product.data';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OrderData {

private orders: Order[] = [];

    constructor(private productData: ProductData, private http: HttpClient) {}

    getOrders(): Order[] {
        return this.orders;
    }

    // saveOrder(order: Order): void {
     //   console.log(JSON.stringify(order));
     // }

    // tslint:disable-next-line:member-ordering
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
      };

      saveOrder(order: Order): Observable<Order> {
        // console.log('MY ORDER: ', JSON.stringify(order));
        console.log('CART Price: ', JSON.stringify(order.cart.cartPrice));
        console.log('CART Items: ', JSON.stringify(order.cart.itemCount));
        console.log('ID: ', JSON.stringify(order.id));
        console.log('NAME: ', JSON.stringify(order.name));

        this.http.post('https://e-commerce-angular-app.firebaseio.com/orders.json',order, this.httpOptions)
        .subscribe(
            (val) => {
                console.log('POST call successful value returned in body',
                            val);
            },
            response => {
                console.log('POST call in error', response);
            },
            () => {
                console.log('The POST observable is now completed.');
            });

        return from([order]);
      }

}
