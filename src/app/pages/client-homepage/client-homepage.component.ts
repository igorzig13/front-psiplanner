import { Component } from '@angular/core';
import { HorizontalCardComponent } from '../../components/horizontal-card/horizontal-card.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-client-homepage',
  standalone: true,
  imports: [ HorizontalCardComponent , ButtonComponent],
  templateUrl: './client-homepage.component.html',
  styleUrl: './client-homepage.component.css'
})
export class ClientHomepageComponent {
  test() {
    console.log('test');
  }
}
