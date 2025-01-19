import {Component, inject} from '@angular/core';
import { HorizontalCardComponent } from '../../components/horizontal-card/horizontal-card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../../components/popup/popup.component';
import { DefaultCardComponent } from '../../components/default-card/default-card.component';
import {CalendarComponent, CalendarDate} from '../../components/calendar/calendar.component';
import { DailySchedulerComponent } from "../../components/daily-scheduler/daily-scheduler.component";
import { ConfirmationFormComponent } from "../../components/confirmation-form/confirmation-form.component";
import { MessageComponent } from '../../components/message/message.component';
import {ClientHomepageService} from '../../services/client-homepage.service';
import {TokenCookieService} from '../../services/token-cookie.service';

@Component({
  selector: 'app-client-homepage',
  standalone: true,
  imports: [NavbarComponent, HorizontalCardComponent, ButtonComponent, CommonModule, PopupComponent, DefaultCardComponent,
           CalendarComponent, DailySchedulerComponent, ConfirmationFormComponent, MessageComponent],
  templateUrl: './client-homepage.component.html',
  styleUrl: './client-homepage.component.css'
})
export class ClientHomepageComponent {
  navUi: number = 2;

  clientHomepageService: ClientHomepageService = inject(ClientHomepageService);
  tokenServiceCoolie: TokenCookieService = inject(TokenCookieService);

  openDetails: boolean = false;
  openBookinAppointment: boolean = false;
  openDailyAppointment: boolean = false;
  openConfirmation: boolean = false;
  openMessage: boolean = false
  message: string = '';

  selectedClinicOrProfessional: any = null;

  clinicAndProfessionals: any = [];
  token: any = null;

  selectedDay: CalendarDate = { day: 0, month: 0, year: 0, monthName: '', fullName: '' };
  selectedHour: string = '';

  toggleDetails(clinicOrProfessional: any) {
    this.openDetails = !this.openDetails;

    if (this.openDetails) {
      this.selectedClinicOrProfessional = clinicOrProfessional;
    } else {
      this.selectedClinicOrProfessional = null;
    }
  }

  toggleBookingAppointment() {
    this.openBookinAppointment = !this.openBookinAppointment;
  }

  toggleDailyAppointment(day: CalendarDate) {
    if (!this.openDailyAppointment) {
      const dayDate = new Date(day.year, day.month, day.day);
      const today = new Date();
      today.setHours(0, 0, 0 , 0);

      this.selectedDay = day;

      if (dayDate > today) { this.openDailyAppointment = true; }
      return;
    }

    if (this.openDailyAppointment) {
      this.openDailyAppointment = false;
      return;
    }
  }

  toggleConfirmation() {
    this.openConfirmation = !this.openConfirmation;
  }

  toggleMessage() {
    this.openMessage = !this.openMessage;

    setTimeout(() => {
      this.openMessage = !this.openMessage;
      this.message = '';
    }, 5000);
  }

  confirmation(sucess: boolean) {
    if (sucess) {
      this.message = 'Consulta agendada para: ' + this.selectedDay.fullName + ' às ' + this.selectedHour;
      this.toggleConfirmation();
      this.openDailyAppointment = false;
      this.toggleMessage();
    }
  }

  makeAppointment(selectedHour: string) {
    this.selectedHour = selectedHour;
  }

  getClinicsAndProfessionals(token: string) {
    this.clientHomepageService.getClinicsAndProfessionals(token).subscribe({
      next: data => {
        this.clinicAndProfessionals = data;
      }, error: error => {
        console.log("Algo deu errado na requisição: ", error);
      }
    });
  }

  constructor() {
    if (this.tokenServiceCoolie.getToken() == null) return;
    this.token = this.tokenServiceCoolie.getToken();
    this.getClinicsAndProfessionals(this.token);
  }
}
