import { Injectable } from '@angular/core';
import { Cart } from './cart.data.model';
import { CreditCard } from './credit_card.data.model';

@Injectable()
export class Order {
    public id: number;
    public name: string;
    public address: string;
    public city: string;
    public zip: string;
    public country: string;
    public shipped = false;
    public creditCardNumber: number;

    constructor(public cart: Cart, public creditCard: CreditCard) { }

    clear() {
        this.id = null;
        this.name = this.address = this.city = null;
        this.zip = this.country = null;
        this.shipped = false;
        this.cart.clear();
        this.creditCard.clear();
    }
}
