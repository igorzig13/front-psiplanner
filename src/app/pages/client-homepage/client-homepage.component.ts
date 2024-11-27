import {Component, Input } from '@angular/core';
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

  openDetails: boolean = false;
  openBookinAppointment: boolean = false;
  openDailyAppointment: boolean = false;
  openConfirmation: boolean = false;
  openMessage: boolean = false
  message: string = '';

  selectedClinicOrProfessional: any = null;

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

    //sample data
    clinicsAndProfessionals = [
      {
        name: 'Clínica IMD',
        url_img: 'icons/person.svg',
        description: 'Olá, conheça a clínica IMD',
        location: 'Localização',
        professional_list: [
          { name: 'Itamir', rating: 5},
          { name: 'Tonhão', rating: 4.7},
          { name: 'Thanos', rating: 4.5},
          { name: 'Girão', rating: 4.4},
        ]
      },
      {
        name: 'Igor Marques',
        url_img: 'icons/person.svg',
        description: 'Conheça Igor Marques',
        location: 'Localização',
        rating: 3.9,
        professional_list: []
      },
      {
        name: 'Clínica Fut',
        url_img: 'icons/person.svg',
        description: 'Bem-vindo à Clínica Fut',
        location: 'Localização',
        professional_list: [
          {name: 'Pelé', rating: 5},
          {name: 'Maradona', rating: 2.5},
          {name: 'Messi', rating: 4},
          {name: 'Cristiano', rating: 4.1},
        ]
      },
      {
        name: 'Clínica TV',
        url_img: 'icons/person.svg',
        description: 'Conheça a Clínica TV',
        location: 'Localização',
        professional_list: [
          {name: 'William', rating: 4.5},
          {name: 'Silvio', rating: 5},
          {name: 'Celso', rating: 3.9},
          {name: 'Ratinho', rating: 4},
        ]
      },
      {
        name: 'Vitor Emanuel',
        url_img: 'icons/person.svg',
        description: 'Olá, sou Vitor Emanuel',
        location: 'Localização',
        professional_list: [],
        rating: 4
      }
    ];
}
