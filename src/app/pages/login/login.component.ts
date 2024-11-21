import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '../../components/button/button.component';
import { LinkComponent } from "../../components/link/link.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, LinkComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {  }

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
      console.log(this.form.value);
    } else {
      console.log("Invalid form");
    }
    this.form.reset();
  }
}
