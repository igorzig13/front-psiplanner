import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { PopupComponent } from '../../components/popup/popup.component';
import { ButtonComponent } from "../../components/button/button.component";
import { DefaultCardComponent } from '../../components/default-card/default-card.component';
import { CalendarComponent, CalendarDate } from "../../components/calendar/calendar.component";
import { MessageComponent } from '../../components/message/message.component';
import { ConfirmationFormComponent } from '../../components/confirmation-form/confirmation-form.component';

@Component({
  selector: 'app-professional-calendar',
  standalone: true,
  imports: [NavbarComponent, PopupComponent, ButtonComponent, DefaultCardComponent, CalendarComponent, MessageComponent, ConfirmationFormComponent],
  templateUrl: './professional-calendar.component.html',
  styleUrl: './professional-calendar.component.css'
})
export class ProfessionalCalendarComponent {
  navUi: number = 4;

  selectedPacient: any = null;
  openConfirmation: boolean = false;
  showMessage: boolean = false;

  message: string = '';
  dateString: string = '';

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

  calendarEventListener(day: CalendarDate) {
    const clickedDate = new Date(day.year, day.month, day.day);

    this.dateString = ( day.day + 1 <= 10 ? '0' + day.day : day.day ) + '/' +
                      ( day.month + 1 <= 10 ? '0' + (day.month + 1) : day.month + 1 ) + '/' +
                      day.year;

    const today = new Date();

    today.setHours(0, 0, 0 , 0);

    if (clickedDate < today) {
      this.toggleDoneConsults();
    } else {
      this.toggleNextConsults();
    }
  }

  toggleConfirmation () {
    this.openConfirmation = !this.openConfirmation;
  }

  toggleMessage() {
    this.showMessage = !this.showMessage;

    setTimeout(() => {
      this.showMessage = !this.showMessage;
      this.message = '';
    }, 5000);
  }

  removePacient (sucess: boolean) {
    if (sucess) {
      if (this.selectedPacient) {
        const index = this.nextPacients.findIndex(p => p.name === this.selectedPacient.name);

        if (index !== -1) {
          this.nextPacients.splice(index, 1);
        }

        this.message = 'Profissional removido com sucesso!';
        this.toggleMessage();
        this.toggleConfirmation();
        this.toggleDetailsNext(this.selectedPacient);
      }
    }
  }
}
