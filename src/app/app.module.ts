import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { StoreComponent } from './store/store.component';

// for firebase backend service integration
import { AngularFireModule, FirebaseNameOrConfigToken} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { ProductData } from './model/product.data';
import { ProductService } from './model/product.service';
import { Cart } from './model/cart.data.model';
import { Order } from './model/order.data.model';
import { OrderData } from './model/order.data';


@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [BrowserModule, RouterModule, AppRoutingModule, FormsModule, HttpClientModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireDatabaseModule],
  declarations: [AppComponent, CartComponent, OrderComponent, StoreComponent],
  providers: [ProductData, ProductService, Cart, Order, OrderData],
  bootstrap:  [AppComponent ]
})

export class AppModule {}
