import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { OrderComponent } from '../order/order.component';
import { StoreComponent } from '../store/store.component';

// this angular module has only one purpose which is routing
// mapping URLs into angular components
const routes: Routes = [
  {path: 'store', component: StoreComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order', component: OrderComponent},
  // using wildcards to match any other URL
  {path: '**', redirectTo: '/store'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
