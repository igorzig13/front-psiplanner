import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ButtonComponent } from '../../components/button/button.component';
import { DashboardCardComponent } from '../../components/dashboard-card/dashboard-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional-home',
  standalone: true,
  imports: [NavbarComponent, DashboardCardComponent, ButtonComponent],
  templateUrl: './professional-home.component.html',
  styleUrl: './professional-home.component.css'
})
export class ProfessionalHomeComponent {
  navUi: number = 4;

  constructor(private route: Router) { }

  nameProfessional: string = 'Igor Marques';
  monthConsults: number = 4;
  allConsults: number = 12;
  allAvailable: number = 4.2;
  monthCancel: number = 0;

  appointmentsFunction() {
    this.route.navigate(['professional/consults'])
  }

  editFunction() {
    this.route.navigate(['professional/agenda'])
  }
}
