import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HorizontalCardComponent } from '../../components/horizontal-card/horizontal-card.component';
import { PopupComponent } from '../../components/popup/popup.component';
import { ButtonComponent } from "../../components/button/button.component";
import { DefaultCardComponent } from '../../components/default-card/default-card.component';
import { ConfirmationFormComponent } from '../../components/confirmation-form/confirmation-form.component';
import { MessageComponent } from '../../components/message/message.component';

@Component({
  selector: 'app-professional-consults',
  standalone: true,
  imports: [NavbarComponent, HorizontalCardComponent, PopupComponent, ButtonComponent, DefaultCardComponent, ConfirmationFormComponent, MessageComponent],
  templateUrl: './professional-consults.component.html',
  styleUrl: './professional-consults.component.css'
})
export class ProfessionalConsultsComponent {
  navUi: number = 4;

  showNext: boolean = false;
  showDone: boolean = false;
  showDetailsNext: boolean = false;
  showDetailsDone: boolean = false;
  openConfirmation: boolean = false;
  showMessage: boolean = false;

  message: string = '';

  selectedPacient: any = null;

  pacientsNext = [
    { name: 'Vitor Emanuel', url_img: 'https://placehold.co/400', data: '27/06/2003' },
    { name: 'Aldo Queiroz', url_img: 'https://placehold.co/450', data: '12/12/2012' }
  ];

  pacientsDone = [
    { name: 'João Pedro', url_img: 'https://placehold.co/200', data: '23/12/2025' },
    { name: 'Igor Marques', url_img: 'https://placehold.co/300', data: '01/12/2014' },
    { name: 'Itamir', url_img: 'https://placehold.co/600', data: '01/01/2001' },
  ];


  toogleNext() {
    this.showNext = !this.showNext;
  }

  toogleDone() {
    this.showDone = !this.showDone;
  }

  toogleDetailsNext(pacient: any) {
    this.showDetailsNext = !this.showDetailsNext;

    if (this.showDetailsNext) { this.selectedPacient = pacient; }
    else { this.selectedPacient = null; }
  }

  toogleDetailsDone(pacient: any) {
    this.showDetailsDone = !this.showDetailsDone;

    if (this.showDetailsDone) { this.selectedPacient = pacient; }
    else { this.selectedPacient = null; }
  }

  toggleConfirmation () {
    this.openConfirmation = !this.openConfirmation;
  }

  toggleMessage() {
    this.showMessage = !this.showMessage;

    setTimeout(() => {
      this.showMessage = !this.showMessage;
      this.message = '';
    }, 5000);
  }

  removePacient (sucess: boolean) {
    if (sucess) {
      if (this.selectedPacient) {
        const index = this.pacientsNext.findIndex(p => p.name === this.selectedPacient.name);

        if (index !== -1) {
          this.pacientsNext.splice(index, 1);
        }

        this.message = 'Profissional removido com sucesso!';
        this.toggleMessage();
        this.toggleConfirmation();
        this.toogleDetailsNext(this.selectedPacient);
      }
    }
  }
}
