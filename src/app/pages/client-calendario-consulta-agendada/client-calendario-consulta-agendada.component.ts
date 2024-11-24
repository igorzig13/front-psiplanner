import { Component} from '@angular/core';
import { DefaultCardComponent } from "../../components/default-card/default-card.component";
import { PopupComponent } from '../../components/popup/popup.component';
import { ButtonComponent } from "../../components/button/button.component";
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-client-calendario-consulta-agendada',
  standalone: true,
  imports: [NavbarComponent,DefaultCardComponent,PopupComponent,ButtonComponent],
  templateUrl: './client-calendario-consulta-agendada.component.html',
  styleUrl: './client-calendario-consulta-agendada.component.css'
})
export class ClientCalendarioConsultaAgendadaComponent {
  navUi:number = 2;
  openAgendamento: boolean = false;
  rating:number=4;

  toggleAgendamento(){
    this.openAgendamento = !this.openAgendamento;
  }

}
