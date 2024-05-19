import { CurrencyPipe } from '@angular/common'
import { Component, EventEmitter, Output, input } from '@angular/core'
// ----------
import { AnchorComponent } from '@atoms/anchor/anchor.component'
import { Product } from '@shared/models/product.interface'

type Data = {
  date?: string
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [AnchorComponent, CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Output() addToCartEvent = new EventEmitter<Product>()

  public product = input.required<Product>()

  onAddToCart(): void {
    this.addToCartEvent.emit(this.product());
  }
}
