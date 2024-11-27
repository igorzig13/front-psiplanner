import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ButtonComponent } from "../../components/button/button.component";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validator, FormControlName, Validators } from '@angular/forms';
import { MessageComponent } from '../../components/message/message.component';

@Component({
  selector: 'app-clinic-perfil',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent, ReactiveFormsModule, MessageComponent],
  templateUrl: './clinic-perfil.component.html',
  styleUrl: './clinic-perfil.component.css'
})
export class ClinicPerfilComponent implements OnInit {
  navUi: number = 3;

  showMessage: boolean = false;
  message: string = '';

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
      password: ['', [Validators.required]],
    });
  }

  toggleMessage() {
    this.showMessage = !this.showMessage;

    setTimeout(() => {
      this.showMessage = !this.showMessage;
      this.message = '';
    }, 5000);
  }

  send() {
    if (this.formUpdate.valid) {
      console.log(this.formUpdate.value);
      this.message = 'Seus dados foram atualizados';
      this.toggleMessage();
      this.formUpdate.reset();
    }
  }

  cancel() {
    this.formUpdate.reset();
  }
}
