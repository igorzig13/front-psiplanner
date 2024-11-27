import { Component } from '@angular/core';
import { SchedulerComponent } from '../../components/scheduler/scheduler.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ButtonComponent } from "../../components/button/button.component";
import { MessageComponent } from '../../components/message/message.component';

@Component({
  selector: 'app-professional-schedule',
  standalone: true,
  imports: [SchedulerComponent, NavbarComponent, ButtonComponent, MessageComponent],
  templateUrl: './professional-schedule.component.html',
  styleUrl: './professional-schedule.component.css'
})
export class ProfessionalScheduleComponent {
  navUi: number = 4;

  showMessage: boolean = false;
  message: string = 'Alterações realizadas com sucesso!';

  toggleMessage() {
    this.showMessage = !this.showMessage;

    setTimeout(() => {
      this.showMessage = !this.showMessage;
      this.message = '';
    }, 5000);
  }
}
