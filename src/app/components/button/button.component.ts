import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
  @Input() text: string = '';
  @Output() onClick = new EventEmitter();
  @Input() btnClass: string | string[] | { [klass: string]: any } = '';
}
