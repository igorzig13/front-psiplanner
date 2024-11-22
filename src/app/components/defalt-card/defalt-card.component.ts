import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-defalt-card',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './defalt-card.component.html',
  styleUrl: './defalt-card.component.css'
})
export class DefaltCardComponent {
  @Input() type: 'professional' | 'patient' = 'patient';
  @Input() btnText: string = '';
}
