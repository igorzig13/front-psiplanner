import { Component } from '@angular/core';
import { HorizontalCardComponent } from '../../components/horizontal-card/horizontal-card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../../components/popup/popup.component';
import { DefaultCardComponent } from '../../components/default-card/default-card.component';
import {CalendarComponent} from '../../components/calendar/calendar.component';

@Component({
  selector: 'app-client-homepage',
  standalone: true,
  imports: [NavbarComponent, HorizontalCardComponent, ButtonComponent, CommonModule, PopupComponent, DefaultCardComponent, CalendarComponent],
  templateUrl: './client-homepage.component.html',
  styleUrl: './client-homepage.component.css'
})
export class ClientHomepageComponent {

  navUi: number = 2;
  openDetails: boolean = false;
  openBookinAppointment: boolean = false;

  selectedClinicOrProfessional: any = null;

  test() {
    console.log('test');
  }

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
    console.log('test');
  }
}
