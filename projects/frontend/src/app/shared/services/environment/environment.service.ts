import { Injectable } from '@angular/core'

import { environment } from '@env/environment.development'

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  env!: Record<string, string | boolean>

  constructor () {
    this.env = environment
  }

  getValue (key: string): string | boolean {
    return this.env[key]
  }
}
