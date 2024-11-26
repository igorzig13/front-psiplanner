import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CalendarComponent, CalendarDate } from '../../components/calendar/calendar.component';
import { PopupComponent } from '../../components/popup/popup.component';
import { DefaultCardComponent } from '../../components/default-card/default-card.component';

@Component({
  selector: 'app-client-calendar',
  standalone: true,
  imports: [ButtonComponent, NavbarComponent, CalendarComponent, PopupComponent, DefaultCardComponent],
  templateUrl: './client-calendar.component.html',
  styleUrl: './client-calendar.component.css'
})
export class ClientCalendarComponent {
  navUi: number = 2;

  selectedPacient: any = null;
  dateString: string = '';

  openNextConsults: boolean = false;
  openDoneConsults: boolean = false;
  openAvailable: boolean = false;

  previousProfessional = { name: 'Aldo Queiroz', url_img: 'https://placehold.co/450', rating: 5 };
  nextProfessional = { name: 'João Pedro', url_img: 'https://placehold.co/300', rating: 4.9 };

  toggleNextConsults() {
    this.openNextConsults = !this.openNextConsults;
  }

  toggleDoneConsults() {
    this.openDoneConsults = !this.openDoneConsults;
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

  cancelConsultPacient () {
    if (this.selectedPacient) {
      this.nextProfessional = { name: '', url_img: '', rating: 0 };
    }
  }
}
