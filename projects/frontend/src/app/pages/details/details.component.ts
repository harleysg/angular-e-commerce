import { CurrencyPipe } from '@angular/common';
import { Component, OnChanges, Signal, SimpleChanges, effect, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AnchorComponent } from '@atoms/anchor/anchor.component';
// -----
import { Product } from '@shared/models/product.interface';
import { ApiService } from '@shared/services/api/api.service';
import { CartStore } from '@shared/store/shopping-cart.store';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe, AnchorComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export default class DetailsComponent implements OnChanges {
  productId = input<number>(0, { alias: 'id' });
  product!: Signal<Product | undefined>;
  startRate: SafeHtml[] = []

  private readonly apiService = inject(ApiService)
  private readonly _sanitizer = inject(DomSanitizer)
  private cartStore = inject(CartStore)

  constructor() {
    effect(() => {
      this.buildRateStars()
    })
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productId'].currentValue) {
      const product = this.apiService.getProductById(this.productId())
      this.product = product
    }
  }

  /**
   * 
  */
 private buildRateStars(): void {
   if (this.product()) {
      let startRate: SafeHtml[] = [];
      new Array(5).fill(0).forEach((n, i) => {
        startRate.push(this.generateSvg(i))
      })
      this.startRate = startRate
    }
  }
  
  onAddToCart() {
    const product = this.product()

    if (product) {
      this.cartStore.addToCart({...product, qty: 1})
    }
  }

  /**
   * 
   * @param index 
   * @returns 
   */
  private generateSvg(index: number): SafeHtml {
    let svgContent = '';
    const rate = this.product()?.rating.rate as number;

    if (index + 1 <= Math.floor(rate)) {
      svgContent = `<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" class="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
              </path>
            </svg>`;
    } else if (index < rate) {
      svgContent = `<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="partialFillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" style="stop-color:currentColor; stop-opacity:1" />
              <stop offset="50%" style="stop-color:currentColor; stop-opacity:0" />
            </linearGradient>
          </defs>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#partialFillGradient)"></path>
        </svg>`;
    } else {
      svgContent = `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              class="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
              </path>
            </svg>`;
    }

    return this._sanitizer.bypassSecurityTrustHtml(svgContent);
  }
}
