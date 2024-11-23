import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-default-card',
  standalone: true,
  imports: [ CommonModule, ButtonComponent ],
  templateUrl: './default-card.component.html',
  styleUrl: './default-card.component.css'
})
export class DefaultCardComponent {
  @Input() type: 'professional' | 'client' = 'client';
  @Input() btnText: string = '';

  @Input() name!: string;
  @Input() url_img!: string;
  @Input() rating!: number;

  @Output() onButtonClick = new EventEmitter<void>();
}
