import {Component, Input } from '@angular/core';
import { HorizontalCardComponent } from '../../components/horizontal-card/horizontal-card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../../components/popup/popup.component';
import { DefaultCardComponent } from '../../components/default-card/default-card.component';
import {CalendarComponent, CalendarDate} from '../../components/calendar/calendar.component';
import { DailySchedulerComponent } from "../../components/daily-scheduler/daily-scheduler.component";

@Component({
  selector: 'app-client-homepage',
  standalone: true,
  imports: [NavbarComponent, HorizontalCardComponent, ButtonComponent, CommonModule, PopupComponent, DefaultCardComponent, CalendarComponent, DailySchedulerComponent],
  templateUrl: './client-homepage.component.html',
  styleUrl: './client-homepage.component.css'
})
export class ClientHomepageComponent {

  navUi: number = 2;
  openDetails: boolean = false;
  openBookinAppointment: boolean = false;
  openDailyAppointment: boolean = false;

  selectedClinicOrProfessional: any = null;

  selectedDay: CalendarDate = { day: 0, month: 0, year: 0, monthName: '', fullName: '' };
  selectedHour: string = '';

  //sample data
  clinicsAndProfessionals = [
    {
      name: 'Clínica 01',
      url_img: 'icons/person.svg',
      description: 'Olá, somos a Clínica 01',
      location: 'Localização 01',
      professional_list: [
        { name: 'Profissional 10', rating: 1},
        { name: 'Profissional 11', rating: 2},
        { name: 'Profissional 12', rating: 3},
        { name: 'Profissional 13', rating: 4},
      ]
    },
    {
      name: 'Profissional 01',
      url_img: 'icons/person.svg',
      description: 'Conheça o Profissional 01',
      location: 'Localização 01',
      rating: 1,
      professional_list: []
    },
    {
      name: 'Clínica 02',
      url_img: 'icons/person.svg',
      description: 'Bem-vindo à Clínica 02',
      location: 'Localização 02',
      professional_list: [
        {name: 'Profissional 20', rating: 1},
        {name: 'Profissional 21', rating: 2},
        {name: 'Profissional 22', rating: 3},
        {name: 'Profissional 23', rating: 4},
      ]
    },
    {
      name: 'Clínica 03',
      url_img: 'icons/person.svg',
      description: 'Conheça a Clínica 03',
      location: 'Localização 03',
      professional_list: [
        {name: 'Profissional 30', rating: 1},
        {name: 'Profissional 31', rating: 2},
        {name: 'Profissional 32', rating: 3},
        {name: 'Profissional 33', rating: 4},
      ]
    },
    {
      name: 'Profissional 02',
      url_img: 'icons/person.svg',
      description: 'Olá, sou o Profissional 02',
      location: 'Localização 02',
      professional_list: [],
      rating: 4
    }
  ];

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

      if (dayDate > today) {
        this.openDailyAppointment = true;
      }
      return;
    }

    if (this.openDailyAppointment) {
      this.openDailyAppointment = false;
      return;
    }
  }

  makeAppointment(selectedHour: string) {
    this.selectedHour = selectedHour;

    console.log('Consulta agendada para: ' + this.selectedDay.fullName + ' às ' + this.selectedHour);
  }
}
