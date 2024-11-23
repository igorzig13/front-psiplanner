import { Component } from '@angular/core';
import { HorizontalCardComponent } from '../../components/horizontal-card/horizontal-card.component';

@Component({
  selector: 'app-client-homepage',
  standalone: true,
  imports: [ HorizontalCardComponent ],
  templateUrl: './client-homepage.component.html',
  styleUrl: './client-homepage.component.css'
})
export class ClientHomepageComponent {
  test() {
    console.log('test');
  }
}
