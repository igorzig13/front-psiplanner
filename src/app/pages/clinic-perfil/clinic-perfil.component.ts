import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ButtonComponent } from "../../components/button/button.component";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validator, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-clinic-perfil',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './clinic-perfil.component.html',
  styleUrl: './clinic-perfil.component.css'
})
export class ClinicPerfilComponent implements OnInit {
  navUi: number = 3;

  formUpdate: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.formUpdate = this.formBuilder.group({
      email: ['', []],
      telephone: ['', []],
      location: ['', []],
      password: ['', []],
    });
  }

  send() {
    console.log(this.formUpdate.value);
    this.formUpdate.reset();
  }

  cancel() {
    this.formUpdate.reset();
  }
}
