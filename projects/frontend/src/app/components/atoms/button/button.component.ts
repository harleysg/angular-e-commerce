import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Output() emitter: EventEmitter<any> = new EventEmitter()
  style = input<string>('light' || 'dark')
}
