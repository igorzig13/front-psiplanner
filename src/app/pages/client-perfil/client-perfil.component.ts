import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ButtonComponent } from "../../components/button/button.component";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validator, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-client-perfil',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './client-perfil.component.html',
  styleUrl: './client-perfil.component.css'
})
export class ClientPerfilComponent {
  navUi: number = 2;

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
