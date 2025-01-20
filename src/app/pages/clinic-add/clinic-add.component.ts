import {Component, inject} from '@angular/core';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {HorizontalCardComponent} from '../../components/horizontal-card/horizontal-card.component';
import {ClinicProfessionalsService} from '../../services/clinic-professionals.service';
import {TokenCookieService} from '../../services/token-cookie.service';

@Component({
  selector: 'app-clinic-add',
  standalone: true,
  imports: [
    NavbarComponent,
    HorizontalCardComponent
  ],
  templateUrl: './clinic-add.component.html',
  styleUrl: './clinic-add.component.css'
})
export class ClinicAddComponent {
  token: any;
  id: any;
  navUi: number = 3;

  clinicProfessionalsService = inject(ClinicProfessionalsService);
  tokenService = inject(TokenCookieService);

  professionals: any =  [];

  constructor() {
    this.token = this.tokenService.getToken();
    this.id = localStorage.getItem("entityId");
    this.getAvailableProfessionals(this.token);
  }

  getAvailableProfessionals(token: string) {
    this.clinicProfessionalsService.getAvailableProfessionals(token).subscribe({
      next: (result) => {
        this.professionals = result
      }, error: error => {
        console.log(error);
      }
    });
  }

  register(professional: any) {
    console.log(professional);
    console.log(professional.id);
    console.log(this.id);
    this.clinicProfessionalsService.addProfessional(this.token, this.id, professional.id).subscribe({
      next: (result) => {
        console.log(result);
      }, error: error => {
        console.log(error);
      }
    });
  }


}
