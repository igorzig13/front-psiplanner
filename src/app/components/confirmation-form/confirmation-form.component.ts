import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirmation-form',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './confirmation-form.component.html',
  styleUrl: './confirmation-form.component.css'
})
export class ConfirmationFormComponent implements OnInit {
  @Output() cancelFunction = new EventEmitter<void>();
  @Output() actionFunction = new EventEmitter<boolean>();

  formConfirmation: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.formConfirmation = this.formBuilder.group(
      {
        password: ['', [Validators.required]],
        confirm_password: ['', [Validators.required]]
      },
      // {
      //   validators: this.passwordMatchValidator
      // }
    );
  }

  passwordMatchValidator(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirm_password')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  eventAction() {
    if (this.formConfirmation.valid) {
      console.log('Formulário válido');
      this.actionFunction.emit(true);
      return;
    }
    console.log('Formulário inválido');
    this.actionFunction.emit(false);
  }
}
