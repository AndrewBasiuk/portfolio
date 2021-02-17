import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public auth: AngularFireAuth
  ) { }

  createForm() {
    this.loginForm = this.fb.group({
      email: [''],
      pass: [''],
    });
  }

  onSubmit() {
    console.log(1);
  }

  ngOnInit(): void {
    this.createForm();
  }

}
