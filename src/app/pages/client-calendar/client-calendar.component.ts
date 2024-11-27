import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CalendarComponent, CalendarDate } from '../../components/calendar/calendar.component';
import { PopupComponent } from '../../components/popup/popup.component';
import { DefaultCardComponent } from '../../components/default-card/default-card.component';
import { FormsModule } from '@angular/forms';
import { ConfirmationFormComponent } from "../../components/confirmation-form/confirmation-form.component";
import { MessageComponent } from '../../components/message/message.component';

@Component({
  selector: 'app-client-calendar',
  standalone: true,
  imports: [ButtonComponent, NavbarComponent, CalendarComponent, PopupComponent,
            DefaultCardComponent, FormsModule, ConfirmationFormComponent, MessageComponent],
  templateUrl: './client-calendar.component.html',
  styleUrl: './client-calendar.component.css'
})
export class ClientCalendarComponent {
  navUi: number = 2;

  rating: string = '';
  comment: string = '';
  message: string = '';

  error: boolean = false;

  selectedPacient: any = null;
  dateString: string = '';

  openNextConsults: boolean = false;
  openDoneConsults: boolean = false;
  openAvailable: boolean = false;
  openConfirmation: boolean = false;
  openConfirmationFromCancel: boolean = false;
  showMessage: boolean = false;

  previousProfessional = { name: 'Aldo Queiroz', url_img: 'https://placehold.co/450', rating: 5 };
  nextProfessional = { name: 'João Pedro', url_img: 'https://placehold.co/300', rating: 4.9 };

  toggleNextConsults() {
    this.openNextConsults = !this.openNextConsults;
  }

  toggleDoneConsults() {
    this.openDoneConsults = !this.openDoneConsults;
  }

  toggleAvailable(professional: any) {
    this.openAvailable = !this.openAvailable;
  }

  toggleConfirmationFromCancel() {
    this.openConfirmationFromCancel = !this.openConfirmationFromCancel;
  }

  toggleConfirmation() {
    if (this.openConfirmation) {
      /* Empty. */
      this.openConfirmation = !this.openConfirmation;
      this.error = false;
      return;
    }

    if (!this.openConfirmation) {
      if (this.rating !== '') {
        this.openConfirmation = !this.openConfirmation;
        return;
      }
      this.error = true;
    }
  }

  toggleMessage() {
    this.showMessage = !this.showMessage;

    setTimeout(() => {
      this.showMessage = !this.showMessage;
      this.message = '';
    }, 5000);
  }

  sendAvailable(sucess: boolean) {
    if (sucess) {
      console.log('Classificação: ' + this.rating + ' - ' + this.comment);
      this.comment = '';
      this.rating = '';
      this.toggleConfirmation();
      this.toggleAvailable(this.previousProfessional);
      this.message = 'Avaliação enviada com sucesso!';
      this.toggleMessage();
    }
  }

  cancelConsultPacient (sucess: boolean) {
    if (sucess) {
      this.toggleConfirmationFromCancel();
      this.toggleNextConsults();
      this.message = 'Consulta cancelada com sucesso!';
      this.toggleMessage();
    }
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
}
