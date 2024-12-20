import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from "../../components/navbar/navbar.component";

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

  ngOnInit(): void {
    this.initializeForms();
  }

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  initializeForms() {
    this.formClient = this.formBuilder.group({
      name: ['', []],
      surname: ['', []],
      cpf: ['', []],
      email: ['', []],
      telephone: ['', []],
      password: ['', []]
    });

    this.formClinic = this.formBuilder.group({
      name: ['', []],
      cnpj: ['', []],
      email: ['', []],
      telephone: ['', []],
      location: ['', []],
      password: ['', []]
    });

    this.formProfessional = this.formBuilder.group({
      name: ['', []],
      crp: ['', []],
      email: ['', []],
      telephone: ['', []],
      approach: ['', []],
      password: ['', []]
    });
  }

  setClientForm() { this.selectForm = 'client'; }
  setProfessionalForm() { this.selectForm = 'professional'; }
  setClinicForm() { this.selectForm = 'clinic'; }

  cancel() {
    this.router.navigate(['/login']);
  }

  submit() {
    if (this.selectForm === 'client' && this.formClient.valid) {
      console.log("Client register: ", this.formClient.value);
    } else if (this.selectForm === 'clinic' && this.formClinic.valid) {
      console.log("Clinic register: ", this.formClinic.value);
    } else if (this.selectForm === 'professional' && this.formProfessional.valid) {
      console.log("Professional register: ", this.formProfessional.value);
    } else {
      console.log("Form is invalid");
    }
  }
}
