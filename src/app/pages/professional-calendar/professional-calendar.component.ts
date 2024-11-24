import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { PopupComponent } from '../../components/popup/popup.component';
import { ButtonComponent } from "../../components/button/button.component";
import { DefaultCardComponent } from '../../components/default-card/default-card.component';

@Component({
  selector: 'app-professional-calendar',
  standalone: true,
  imports: [NavbarComponent, PopupComponent, ButtonComponent, DefaultCardComponent],
  templateUrl: './professional-calendar.component.html',
  styleUrl: './professional-calendar.component.css'
})
export class ProfessionalCalendarComponent {
  navUi: number = 4;

  selectedPacient: any = null;

  openNextConsults: boolean = false;
  openDoneConsults: boolean = false;
  openDetailsNext: boolean = false;
  openDetailsDone: boolean = false;

  previousPacients = [
    { name: 'Vitor Emanuel', url_img: 'https://placehold.co/400' },
    { name: 'Itamir', url_img: 'https://placehold.co/410' },
    { name: 'Igor Marques', url_img: 'https://placehold.co/600' },
  ];

  nextPacients = [
    { name: 'Aldo Queiroz', url_img: 'https://placehold.co/450' },
    { name: 'João Pedro', url_img: 'https://placehold.co/300' }
  ];

  toggleNextConsults() {
    this.openNextConsults = !this.openNextConsults;
  }

  toggleDoneConsults() {
    this.openDoneConsults = !this.openDoneConsults;
  }

  toggleDetailsDone(pacient: any) {
    this.openDetailsDone = !this.openDetailsDone;

    if (this.openDetailsDone) {
      this.selectedPacient = pacient;
    } else { this.selectedPacient = null; }
  }

  toggleDetailsNext(pacient: any) {
    this.openDetailsNext = !this.openDetailsNext;

    if (this.openDetailsNext) {
      this.selectedPacient = pacient;
    } else { this.selectedPacient = null; }
  }

  removePacient () {
    if (this.selectedPacient) {
      const index = this.nextPacients.findIndex(p => p.name === this.selectedPacient.name);

      if (index !== -1) {
        this.nextPacients.splice(index, 1);
      }
    }
  }
}
