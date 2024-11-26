import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ButtonComponent } from "../../components/button/button.component";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validator, FormControlName } from '@angular/forms';
import { MessageComponent } from '../../components/message/message.component';

@Component({
  selector: 'app-client-perfil',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent, ReactiveFormsModule, MessageComponent],
  templateUrl: './client-perfil.component.html',
  styleUrl: './client-perfil.component.css'
})
export class ClientPerfilComponent {
  navUi: number = 2;

  openMessage: boolean = false;
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
      password: ['', []]
    });
  }

  send() {
    console.log(this.formUpdate.value);
    this.formUpdate.reset();
    this.toggleMessage('Seus dados foram atualizados!');
  }

  cancel() {
    this.formUpdate.reset();
  }

  toggleMessage(message: string) {
    this.message = message;
    this.openMessage = !this.openMessage;

    setTimeout(() => {
      this.openMessage = !this.openMessage;
      this.message = '';
    }, 5000);
  }
}
