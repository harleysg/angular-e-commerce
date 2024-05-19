import { NgClass } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, NO_ERRORS_SCHEMA } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-anchor',
  standalone: true,
  imports: [RouterLink, NgClass],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  templateUrl: './anchor.component.html',
  styleUrl: './anchor.component.scss'
})
export class AnchorComponent {
  @Input() styleType: 'normal' | 'dark' = 'normal'
  @Input() routerLink: string | any[] | null | undefined
}
