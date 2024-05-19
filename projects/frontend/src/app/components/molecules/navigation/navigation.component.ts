import { CurrencyPipe, NgTemplateOutlet } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
// ----------
import { AnchorComponent } from '@atoms/anchor/anchor.component'
import { ButtonComponent } from '@atoms/button/button.component'
import { CartStore } from '@shared/store/shopping-cart.store'

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet, CurrencyPipe, AnchorComponent, ButtonComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  public cartStore = inject(CartStore)
}
