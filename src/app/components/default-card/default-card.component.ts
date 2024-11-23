import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  @Input() onButtonClick: () => void = () => {};
}
