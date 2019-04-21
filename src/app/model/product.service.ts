import { Injectable } from '@angular/core';
import { Product } from './product.data.model';
import { ProductData } from './product.data';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ProductService {
  // consists all the products
  private products: Product[] = [];
  // consists all the categories
  private categories: string[] = [];

  private productsURL = 'https://e-commerce-angular-app.firebaseio.com/products.json';

  // injecting productData as a dependency
  constructor(private productData: ProductData, private http: HttpClient, private firebase: AngularFireDatabase) {
    this.getHttpProducts();
  }

    getProducts(category: string ): Product[] {

        // if no category is selected it will return all the products
        if (category == null) {
            return this.products;
        // returning products that belong to the given category
        } else {
            return this.products.filter(p => category === p.category);
        }
    }

    getProduct(id: number): Product {
        return this.products.find(p => p.id === id);
    }

    getCategories(): string[] {
        return this.categories;
    }

    getServiceInitialProducts() {
        return this.products;
    }
    getServiceInitialCategories() {
        return this.categories;
    }

    getHttpProducts() {
     this.http.get<Product[]>(this.productsURL).subscribe(
        data => {
            this.products = data;
            console.log('store products', this.products);

            for (let i of this.products) {
                // console.log(i.category);
                if (this.categories.indexOf(i.category) === -1 ) {
                    this.categories.push(i.category);
                }
            }
            console.log('categories', this.categories);
        },
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log('An error occurred:', err.error.message);
             } else {
                console.log('Status code: ', err.status);
                console.log('Response body:', err.error);
             }
        }
    );
  }

}


