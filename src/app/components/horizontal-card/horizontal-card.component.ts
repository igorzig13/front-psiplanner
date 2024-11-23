import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-horizontal-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './horizontal-card.component.html',
  styleUrl: './horizontal-card.component.css'
})
export class HorizontalCardComponent {
  @Input() typeCard!: string;

  @Input() clickFunction = () => {};

  @Input() dataClient!: { name: string, url_img: string, data: string };
  @Input() dataClinicOrUser!: { name: string, url_img: string, description: string, location: string };
}
