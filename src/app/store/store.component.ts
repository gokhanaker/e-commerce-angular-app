import { Component, OnInit } from '@angular/core';
import { ProductService } from '../model/product.service';
import { Product } from '../model/product.data.model';
import { Cart } from '../model/cart.data.model';
import { ActivatedRoute, Router } from '@angular/router';
import { config } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  // null means all categories
  public selectedCategory = null;
  // for pagination
  public productsPerPage = 4;
  public selectedPage = 1;
  public pageIndex: number;

  public storeProducts: Product[] = [];
  public storeCategories: String[];

  // injecting productService, cart, router as dependencies
  constructor(private productService: ProductService,
              private cart: Cart,
              private router: Router) {}

  getProducts(): void {
    this.pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    this.storeProducts = this.productService.getProducts(this.selectedCategory)
    .slice(this.pageIndex, this.pageIndex + this.productsPerPage);
    console.log('check', this.storeProducts);
  }

  getCategories(): void  {
    this.storeCategories = this.productService.getCategories();
  }

  changeCategory(newCategory: string) {
    this.selectedCategory = newCategory;
    // invoking getProducts() function for every category change
    this.getProducts();
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
    // invoking getProducts() function for every page change
    this.getProducts();
  }

  // creates pagination
  get pageNumbers(): number[] {
    return Array(Math.ceil(this.productService.getProducts(this.selectedCategory).length / this.productsPerPage))
    .fill(0).map((x, i) => i + 1);
  }

  addToCart(product: Product) {
    this.cart.addCartItem(product);
    // when an item is added to cart it navigates to cart component
    this.router.navigateByUrl('/cart');
  }

  getProductServiceProducts() {
    this.storeProducts = this.productService.getServiceInitialProducts();
    this.storeCategories = this.productService.getServiceInitialCategories();
  }

  ngOnInit() {
     this.getProductServiceProducts();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    console.log('ngDoCheck is working');
    this.getProducts();
    this.getCategories();
  }
}
