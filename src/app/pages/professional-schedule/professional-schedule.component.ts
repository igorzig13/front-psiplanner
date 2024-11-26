import { Component } from '@angular/core';
import { SchedulerComponent } from '../../components/scheduler/scheduler.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-professional-schedule',
  standalone: true,
  imports: [SchedulerComponent, NavbarComponent, ButtonComponent],
  templateUrl: './professional-schedule.component.html',
  styleUrl: './professional-schedule.component.css'
})
export class ProfessionalScheduleComponent {
  navUi: number = 4;
}
