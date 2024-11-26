import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validator, FormBuilder } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-professional-perfil',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, NavbarComponent],
  templateUrl: './professional-perfil.component.html',
  styleUrl: './professional-perfil.component.css'
})
export class ProfessionalPerfilComponent {
  navUi: number = 4;

  formUpdate: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.formUpdate = this.formBuilder.group({
      description: ['', []],
      name: ['', []],
      email: ['', []],
      telephone: ['', []],
      location: ['', []],
      password: ['', []],
      crp: ['', []],
      approach: ['', []],
      model: ['', []],
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
