import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { RouterOutlet, RouterLink } from '@angular/router'
// ----------
import { BaseLayoutComponent } from '@layout/base-layout'
import { FooterComponent } from '@organisms/footer/footer.component'
import { HeaderComponent } from '@organisms/header/header.component'

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.scss'
})
export class PublicLayoutComponent extends BaseLayoutComponent { }
