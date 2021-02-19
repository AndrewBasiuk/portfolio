import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {RegistrationTypes} from '../../chat.component';
import {CustomValidationService} from '../../../services/custom-validation.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() type: RegistrationTypes;
  @Input() btnText = 'Sign Up';

  registrationTypes = RegistrationTypes;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customValidationService: CustomValidationService,
    public auth: AngularFireAuth
  ) { }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, this.customValidationService.emailValid]],
      pass: ['', [Validators.required, this.customValidationService.passwordValid]],
    });
  }

  getField(fieldName: string): AbstractControl {
    return this.loginForm.get(fieldName);
  }

  errorMessage(fieldName: string): string {
    let errorText = '';

    switch (fieldName) {
      case 'email':
        errorText = 'wrong email';
        break;

      case 'pass':
        errorText = 'minimum eight characters, at least one letter and one number:';
        break;

      default:
        errorText = '';
    }

    return errorText;
  }

  onSubmit() {
    this.type === this.registrationTypes.SignIn ? this.login() : this.signIn();

    console.log(this.loginForm.get('email').dirty, this.loginForm.get('email').invalid);
  }

  login() {
    console.log(this.type);
  }

  signIn() {
    console.log(this.type);
  }

  ngOnInit(): void {
    this.createForm();
  }

}
