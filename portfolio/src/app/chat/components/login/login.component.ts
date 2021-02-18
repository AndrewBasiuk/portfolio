import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {RegistrationTypes} from '../../chat.component';
import {CustomValidationService} from '../../../services/custom-validation.service';

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
      pass: [''],
    });
  }

  onSubmit() {
    this.type === this.registrationTypes.SignIn ? this.login() : this.signIn();
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
