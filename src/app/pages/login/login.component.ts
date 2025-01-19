import {Component, inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '../../components/button/button.component';
import { LinkComponent } from "../../components/link/link.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {TokenCookieService} from '../../services/token-cookie.service';

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
  tokenCookieService: TokenCookieService = inject(TokenCookieService);

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
          const token = response.token;
          const roles = response.roles;

          this.tokenCookieService.setToken(token, 1);

          if (roles[0] == "ROLE_CLIENT") { this.router.navigate(['/client']).then(); }
          else if (roles[0] == "ROLE_PROFESSIONAL") { this.router.navigate(['/professional']).then(); }
          else if (roles[0] == "ROLE_CLINIC") { this.router.navigate(['/clinic']).then(); }
        }, error: err => {
          console.log(err);
        }
      });
    } else {
      console.log("Invalid form");
    }
    this.form.reset();
  }
}
