import { Injectable } from '@angular/core';

@Injectable()
export class CreditCard {

    public creditCardHolderName: string;
    public creditCardNumber: string;
    public creditCardExpiryDate: string;
    public creditCardSecurityCode: string;

    constructor() {
     }

    // initializing credit cart
    clear() {
        this.creditCardHolderName = 'Mr. Example';
        this.creditCardNumber = '0000 0000 0000 0000';
        this.creditCardExpiryDate = '01/2020';
        this.creditCardSecurityCode = '000';
    }
}
