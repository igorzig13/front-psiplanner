import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { DashboardCardComponent } from '../../components/dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-clinic-home',
  standalone: true,
  imports: [NavbarComponent, DashboardCardComponent],
  templateUrl: './clinic-home.component.html',
  styleUrl: './clinic-home.component.css'
})
export class ClinicHomeComponent {
  navUi: number = 3;

  monthConsults: number = 4;
  allConsults: number = 12;

  monthAvailable: number = 4.6;
  allAvailable: number = 4.2;

  monthCancel: number = 0;
  allCancel: number = 2;
}
