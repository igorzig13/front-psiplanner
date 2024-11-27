import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validator, FormBuilder, Validators } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MessageComponent } from '../../components/message/message.component';

@Component({
  selector: 'app-professional-perfil',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, MessageComponent, NavbarComponent],
  templateUrl: './professional-perfil.component.html',
  styleUrl: './professional-perfil.component.css'
})
export class ProfessionalPerfilComponent {
  navUi: number = 4;

  showMessage: boolean = false;
  message: string = '';

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
      password: ['', [Validators.required]],
      crp: ['', []],
      approach: ['', []],
      model: ['', []],
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
      this.message = 'Seus dados foram atualizados!';
      this.toggleMessage();
      this.formUpdate.reset();
    }
  }

  cancel() {
    this.formUpdate.reset();
  }
}
