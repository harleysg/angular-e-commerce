import { EnvironmentInjector, Injectable, Signal, WritableSignal, inject, runInInjectionContext, signal } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { toSignal } from '@angular/core/rxjs-interop';
// ----------
import { Observable, map, tap } from 'rxjs'
// ----------
import { EnvironmentService } from '@shared/services/environment/environment.service'
import { Product } from '@shared/models/product.interface'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly env = inject(EnvironmentService)
  private readonly httpClient = inject(HttpClient)
  private readonly _injector = inject(EnvironmentInjector);
  private products = signal<Product[]>([])

  getProducts(): WritableSignal<Product[]> {
    return this.products
  }

  queryProducts (): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(`${this.env.getValue('apiUrl')}/products?sort=desc'`)
      .pipe(
        map((products: Product[]) => products.map((product: Product) => ({...product, qty: 1}))),
        tap((data: Product[]) => {
          this.products.set(data)

          return this.products
        })
      )
  }

  getProductById (id: number): Signal<Product | undefined> {
    return runInInjectionContext(this._injector, () => toSignal<Product>(
      this.httpClient
        .get<Product>(`${this.env.getValue('apiUrl')}/products/${id}`)
        // .pipe(
        //   tap((product: Product) => {
        //     return {
        //       ...product,
        //       qty: 1
        //     }
        //   })
        // )
    ))
  }
}
