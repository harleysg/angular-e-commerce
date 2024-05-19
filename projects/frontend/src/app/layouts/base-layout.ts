import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core'
import { ActivatedRoute, RouterOutlet, RouterLink } from '@angular/router'

@Component({
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: '',
  imports: [RouterOutlet, RouterLink]
})
export class BaseLayoutComponent {
  private readonly route = inject(ActivatedRoute)
  public title: string = 'Lucky Labs'
  public useBackButton: boolean = false

  constructor () {
    this.route.data.subscribe(data => {
      this.title = data['header']?.title ?? ''
      this.useBackButton = data['navigation']?.useBackButton ?? false
    })
  }
}
