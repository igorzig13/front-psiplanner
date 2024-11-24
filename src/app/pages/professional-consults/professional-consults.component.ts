import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HorizontalCardComponent } from '../../components/horizontal-card/horizontal-card.component';

@Component({
  selector: 'app-professional-consults',
  standalone: true,
  imports: [NavbarComponent, HorizontalCardComponent],
  templateUrl: './professional-consults.component.html',
  styleUrl: './professional-consults.component.css'
})
export class ProfessionalConsultsComponent {
  navUi: number = 4;

  showNext: boolean = false;
  showDone: boolean = false;

  pacientsNext = [
    { name: 'Vitor Emanuel', url_img: 'https://placehold.co/400', data: '27/06/2003' },
    { name: 'Aldo Queiroz', url_img: 'https://placehold.co/450', data: '12/12/2012' }
  ];

  pacientsDone = [
    { name: 'João Pedro', url_img: 'https://placehold.co/200', data: '23/12/2025' },
    { name: 'Igor Marques', url_img: 'https://placehold.co/300', data: '01/12/2014' },
    { name: 'Itamir', url_img: 'https://placehold.co/600', data: '01/01/2001' },
  ];


  toogleNext() {
    this.showNext = !this.showNext;
  }

  toogleDone() {
    this.showDone = !this.showDone;
  }
}
