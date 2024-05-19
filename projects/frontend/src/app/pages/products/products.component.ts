import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, WritableSignal, inject, signal } from '@angular/core'
import { RouterLink } from '@angular/router';
import { CardComponent } from '@molecules/card/card.component';
import { Product } from '@shared/models/product.interface'
import { ApiService } from '@shared/services/api/api.service'
import { CartStore } from '@shared/store/shopping-cart.store';

type Data = {
  date?: string
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent, RouterLink, CardComponent, AsyncPipe, JsonPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent {
  private productService = inject(ApiService)
  private cartStore = inject(CartStore)
  public products = signal<Product[]>([]);

  constructor() {
    this.products = this.productService.getProducts()
  }

  addToCart(product: Product): void {
    this.cartStore.addToCart(product)
  }
}
