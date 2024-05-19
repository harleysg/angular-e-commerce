import { Component, inject, signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { ApiService } from '@shared/services/api/api.service'
import { Product } from '@shared/models/product.interface'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  private productService = inject(ApiService)

  constructor() {
    this.productService.queryProducts().subscribe()
  }
}
