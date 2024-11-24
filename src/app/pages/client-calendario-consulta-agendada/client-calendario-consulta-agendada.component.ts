import { Component, ViewChild, AfterViewInit,ElementRef } from '@angular/core';
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
  @ViewChild('popup',{read:ElementRef}) popupElement!:ElementRef;
  navUi:number = 2;
  openAgendamento: boolean = false;
  rating:number=4;

  ngAfterViewInit() {
    const popupHeader = this.popupElement.nativeElement.querySelector('.popup-header');
    if (this.openAgendamento) {
      const customTitle = document.createElement('h1');
      customTitle.textContent = 'Este é o título fora do popup-header';
      popupHeader.parentElement.insertBefore(customTitle, popupHeader);
    }
  }

  toggleAgendamento(){
    this.openAgendamento = !this.openAgendamento;
  }

}
