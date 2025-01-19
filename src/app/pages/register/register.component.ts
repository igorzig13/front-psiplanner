import {Component, inject, OnInit} from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, NavbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  navUi: number = 1;

  selectForm: string = 'client';

  formClient: FormGroup = new FormGroup({});
  formClinic: FormGroup = new FormGroup({});
  formProfessional: FormGroup = new FormGroup({});

  private userService: UserService = inject(UserService);

  ngOnInit(): void {
    this.initializeForms();
  }

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  initializeForms() {
    this.formClient = this.formBuilder.group({
      username: ['', []],
      firstName: ['', []],
      lastName: ['', []],
      email: ['', []],
      password: ['', []],
      cpf: ['', []],
      phoneNumber: ['', []],
      gender: ['', []],
    });

    this.formClinic = this.formBuilder.group({
      clinicName: ['', []],
      username: ['', []],
      cnpj: ['', []],
      email: ['', []],
      phoneNumber: ['', []],
      description: ['', []],
      location: ['', []],
      password: ['', []]
    });

    this.formProfessional = this.formBuilder.group({
      firstName: ['', []],
      lastName: ['', []],
      username: ['', []],
      gender: ['', []],
      crp: ['', []],
      email: ['', []],
      phoneNumber: ['', []],
      approach: ['', []],
      cpf: ['', []],
      password: ['', []],
      location: ['', []],
      description: ['', []]
    });
  }

  setClientForm() { this.selectForm = 'client'; }
  setProfessionalForm() { this.selectForm = 'professional'; }
  setClinicForm() { this.selectForm = 'clinic'; }

  cancel() {
    this.router.navigate(['/login']).then();
  }

  submit() {
    let apiCall;
    let load;

    if (this.selectForm === 'client' && this.formClient.valid) {
      console.log("Client register: ", this.formClient.value);
      load = this.formClient.value;
      apiCall = this.userService.registerClient(load);
    } else if (this.selectForm === 'clinic' && this.formClinic.valid) {
      console.log("Clinic register: ", this.formClinic.value);
      load = this.formClinic.value;
      apiCall = this.userService.registerClinic(load);
    } else if (this.selectForm === 'professional' && this.formProfessional.valid) {
      console.log("Professional register: ", this.formProfessional.value);
      load = this.formProfessional.value;
      apiCall = this.userService.registerProfessional(load);
    } else {
      console.log("Form is invalid");
      return;
    }

    apiCall.subscribe({
      next: (response) => {
        console.log(response);
      }, error: err => {
        console.log(err);
      }
    });
  }
}
