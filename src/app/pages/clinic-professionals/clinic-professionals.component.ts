import {Component, inject, OnInit} from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { DefaultCardComponent } from "../../components/default-card/default-card.component";
import { PopupComponent } from '../../components/popup/popup.component';
import { ButtonComponent } from "../../components/button/button.component";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationFormComponent } from '../../components/confirmation-form/confirmation-form.component';
import { MessageComponent } from '../../components/message/message.component';
import {Router} from '@angular/router';
import {ClinicProfessionalsService} from '../../services/clinic-professionals.service';
import {TokenCookieService} from '../../services/token-cookie.service';

@Component({
  selector: 'app-clinic-professionals',
  standalone: true,
  imports: [NavbarComponent, PopupComponent, DefaultCardComponent, ButtonComponent,
            ReactiveFormsModule, ConfirmationFormComponent, MessageComponent],
  templateUrl: './clinic-professionals.component.html',
  styleUrl: './clinic-professionals.component.css'
})
export class ClinicProfessionalsComponent implements OnInit {
  private clinicProfessionalsService: ClinicProfessionalsService = inject(ClinicProfessionalsService);
  private tokenService: TokenCookieService = inject(TokenCookieService);
  router: Router = inject(Router);

  token!: any;
  clinicId!: any;

  navUi: number = 3;

  openEdit: boolean = false;
  openConfirmation: boolean = false;
  showMessage: boolean = false;

  message: string = '';

  selectedProfessional: any = null;

  formRegister: FormGroup = new FormGroup({});

  professionals = [
    { name: 'Vitor Emanuel', url_img: 'https://placehold.co/400', rating: 5 },
    { name: 'Igor Marques', url_img: 'https://placehold.co/300', rating: 5 },
    { name: 'João Pedro', url_img: 'https://placehold.co/200', rating: 5 },
    { name: 'Aldo Queiroz', url_img: 'https://placehold.co/500', rating: 5 }
  ];

  allProfessionals: any =  [];

  constructor(private formBuilder: FormBuilder) {
    this.token = this.tokenService.getToken();
    this.clinicId = localStorage.getItem("entityId");
    this.getAllProfessionals();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.formRegister = this.formBuilder.group({
      crp: ['', []],
      email: ['', []]
    });
  }

  getAllProfessionals() {
    this.clinicProfessionalsService.getProfessionals(this.token, this.clinicId).subscribe({
      next: data => {
        this.allProfessionals = data
      }, error: error => {
        console.log(error);
      }
    })
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

  toogleEdit (professional: any) {
    this.openEdit = !this.openEdit;

    if (this.openEdit) {
      this.selectedProfessional = professional;
    } else {
      this.selectedProfessional = null;
    }
  }

  toggleAdd () {
    this.router.navigate(['clinic/professionals/add']).then();
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

  formatPhoneNumber(phone: string): string {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
}
