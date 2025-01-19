import {Component, inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '../../components/button/button.component';
import { LinkComponent } from "../../components/link/link.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';

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

  authService: AuthService = inject(AuthService);

  constructor(private formBuilder: FormBuilder, private router: Router) {  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      usernameOrEmail: ['', ],
      password: ['', [Validators.required]]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.authService.login(this.form.value).subscribe({
        next: (response) => { 
          console.log(response);
        }, error: err => {
          console.log(err);
        }
      });
    } else {
      console.log("Formulário inválido");
    }
    this.form.reset();
  }
}
