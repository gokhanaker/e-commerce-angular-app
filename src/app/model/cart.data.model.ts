import { Injectable } from '@angular/core';
import { Product } from './product.data.model';

@Injectable()
export class Cart {
    public cartItems: CartItem[] = [];
    public itemCount = 0;
    public cartPrice = 0;

    addCartItem(product: Product, quantity: number = 1) {
        // tslint:disable-next-line:no-shadowed-variable
        let cartItem = this.cartItems.find(cartItem => cartItem.product.id === product.id);
        if (cartItem !== undefined) {
            cartItem.quantity += quantity;
        } else {
            this.cartItems.push(new CartItem(product, quantity));
        }
        this.cartCalculation();
    }

    updateQuantity(product: Product, quantity: number) {
        // tslint:disable-next-line:no-shadowed-variable
        let cartItem = this.cartItems.find(cartItem => cartItem.product.id === product.id);
        if (cartItem !== undefined) {
            cartItem.quantity = Number(quantity);
        }
        this.cartCalculation();
    }

    removeCartItem(id: number) {
        let index = this.cartItems.findIndex(cartItem => cartItem.product.id === id);
        this.cartItems.splice(index, 1);
        this.cartCalculation();
    }

    // initializing cart
    clear() {
        this.cartItems = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

    private cartCalculation() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.cartItems.forEach(cartItem => {
            this.itemCount += cartItem.quantity;
            this.cartPrice += (cartItem.quantity * cartItem.product.price);
        });
    }
}

export class CartItem {

    constructor(public product: Product,
        public quantity: number) {}

    get cartItemTotal() {
        return this.quantity * this.product.price;
    }
}
