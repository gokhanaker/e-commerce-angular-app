import { Injectable } from '@angular/core';

@Injectable()
export class CreditCard {

    public creditCardHolderName: string;
    public creditCardNumber: string;
    public creditCardExpiryDate: string;
    public creditCardSecurityCode: string;

    constructor() {
        this.clear();
    }

    // initializing credit cart
    clear() {
        this.creditCardHolderName = 'Mr. Example';
        this.creditCardNumber = '0000000000000000';
        this.creditCardExpiryDate = '01/01/2020';
        this.creditCardSecurityCode = '000';
    }
}
