import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HorizontalCardComponent } from '../../components/horizontal-card/horizontal-card.component';
import { PopupComponent } from '../../components/popup/popup.component';
import { ButtonComponent } from '../../components/button/button.component';
import { DefaultCardComponent } from '../../components/default-card/default-card.component';

@Component({
  selector: 'app-client-consults',
  standalone: true,
  imports: [ NavbarComponent , HorizontalCardComponent , PopupComponent , ButtonComponent, DefaultCardComponent],
  templateUrl: './client-consults.component.html',
  styleUrl: './client-consults.component.css'
})
export class ClientConsultsComponent {
  navUi: number = 2;

  showNext: boolean = false;
  showDone: boolean = false;
  showDetailsNext: boolean = false;
  showDetailsDone: boolean = false;

  selectedProfessional: any = null;

  professionalsNext = [
    {name: 'Profissional 01', url_img: 'icons/person.svg', description: 'Conheça o Profissional 01', location: 'Localização 01', rating: 1},
    {name: 'Profissional 02', url_img: 'icons/person.svg', description: 'Conheça o Profissional 02', location: 'Localização 02', rating: 2},
    {name: 'Profissional 03', url_img: 'icons/person.svg', description: 'Conheça o Profissional 03', location: 'Localização 03', rating: 3}
  ]

  professionalsDone = [
    {name: 'Profissional 04', url_img: 'icons/person.svg', description: 'Conheça o Profissional 04', location: 'Localização 04', rating: 4},
    {name: 'Profissional 05', url_img: 'icons/person.svg', description: 'Conheça o Profissional 05', location: 'Localização 05', rating: 5},
    {name: 'Profissional 06', url_img: 'icons/person.svg', description: 'Conheça o Profissional 06', location: 'Localização 06', rating: 5}
  ]

  toggleNext() {
    this.showNext = !this.showNext;
  }

  toggleDone() {
    this.showDone = !this.showDone;
  }

  toggleDetailsNext(professional: any) {
    this.showDetailsNext = !this.showDetailsNext;

    if (this.showDetailsNext) { this.selectedProfessional = professional; }
    else { this.selectedProfessional = null; }
  }

  toggleDetailsDone(professional: any) {
    this.showDetailsDone = !this.showDetailsDone;

    if (this.showDetailsDone) { this.selectedProfessional = professional; }
    else { this.selectedProfessional = null; }
  }

  test() {
    console.log('Test');
  }

  rate(){
    console.log('Rate');
  }
}
