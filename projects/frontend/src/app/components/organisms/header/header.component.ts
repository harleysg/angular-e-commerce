import { Location } from '@angular/common'
import { Component, inject, input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AnchorComponent } from '@atoms/anchor/anchor.component'
import { ButtonComponent } from '@atoms/button/button.component'
// ----------
import { NavigationComponent } from '@molecules/navigation/navigation.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NavigationComponent, AnchorComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public useBackButton = input<boolean>(false, { alias: 'useBackButton' })
  public pageTitle = input<string>('', { alias: 'pageTitle' })
  location = inject(Location)

  back() {
    this.location.back()
  }
}
