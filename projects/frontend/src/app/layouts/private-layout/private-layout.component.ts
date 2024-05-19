import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { RouterOutlet, RouterLink } from '@angular/router'
// ----------
import { BaseLayoutComponent } from '@layout/base-layout'
import { FooterComponent } from '@organisms/footer/footer.component'
import { HeaderComponent } from '@organisms/header/header.component'

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './private-layout.component.html',
  styleUrl: './private-layout.component.scss'
})
export class PrivateLayoutComponent extends BaseLayoutComponent { }
