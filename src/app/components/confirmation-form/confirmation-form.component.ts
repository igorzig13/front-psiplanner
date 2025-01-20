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
  @Input() buttonText!: string;

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
    );
  }

  eventAction() {
    this.actionFunction.emit(true);
    return;
  }
}
