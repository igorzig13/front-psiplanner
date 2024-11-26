import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '../../components/button/button.component';
import { LinkComponent } from "../../components/link/link.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, LinkComponent, ReactiveFormsModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  navUi: number = 1;
  form: FormGroup = new FormGroup({});

  users = [
    { email: 'cliente@gmail.com', password: '123456', role: 'cliente' },
    { email: 'profissional@gmail.com', password: '123456', role: 'profissional' },
    { email: 'clinica@gmail.com', password: '123456', role: 'clinica' }
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      const user = this.users.find(u => u.email === email && u.password === password);

      if (user) {
        if (user.role === 'cliente') {
          this.router.navigate(['/client']);
        } else if (user.role === 'profissional') {
          this.router.navigate(['/professional']);
        } else if (user.role === 'clinica') {
          this.router.navigate(['/clinic']);
        }
      } else {
        console.log('Credenciais inválidas');
      }
    } else {
      console.log("Formulário inválido");
    }
    this.form.reset();
  }
}
