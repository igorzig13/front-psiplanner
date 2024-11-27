import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { DefaultCardComponent } from "../../components/default-card/default-card.component";
import { PopupComponent } from '../../components/popup/popup.component';
import { ButtonComponent } from "../../components/button/button.component";
import { LinkComponent } from "../../components/link/link.component";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationFormComponent } from '../../components/confirmation-form/confirmation-form.component';
import { MessageComponent } from '../../components/message/message.component';

@Component({
  selector: 'app-clinic-professionals',
  standalone: true,
  imports: [NavbarComponent, PopupComponent, DefaultCardComponent, ButtonComponent, LinkComponent,
            ReactiveFormsModule, ConfirmationFormComponent, MessageComponent],
  templateUrl: './clinic-professionals.component.html',
  styleUrl: './clinic-professionals.component.css'
})
export class ClinicProfessionalsComponent implements OnInit {
  navUi: number = 3;

  openEdit: boolean = false;
  openAdd: boolean = false;
  openConfirmation: boolean = false;
  showMessage: boolean = false;

  message: string = '';

  selectedProfessional: any = null;

  formRegister: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.formRegister = this.formBuilder.group({
      crp: ['', []],
      email: ['', []]
    });
  }

  professionals = [
    { name: 'Vitor Emanuel', url_img: 'https://placehold.co/400', rating: 5 },
    { name: 'Igor Marques', url_img: 'https://placehold.co/300', rating: 5 },
    { name: 'João Pedro', url_img: 'https://placehold.co/200', rating: 5 },
    { name: 'Aldo Queiroz', url_img: 'https://placehold.co/500', rating: 5 }
  ];

  toogleEdit (professional: any) {
    this.openEdit = !this.openEdit;

    if (this.openEdit) {
      this.selectedProfessional = professional;
    } else {
      this.selectedProfessional = null;
    }
  }

  toogleAdd () {
    this.openAdd = !this.openAdd;
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

  removeProfessional (sucess: boolean) {
    if (sucess) {
      if (this.selectedProfessional) {
        const index = this.professionals.findIndex(p => p.name === this.selectedProfessional.name);
        if (index !== -1) { this.professionals.splice(index, 1); }
      }
      this.message = 'Profissional removido com sucesso!';
      this.toggleMessage();
      this.toggleConfirmation();
      this.toogleEdit(this.selectedProfessional);
    }
  }

  registerProfessionar() {
    console.log(this.formRegister.value);
  }
}
