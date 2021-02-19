import { Injectable } from '@angular/core';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  emailValid(control: FormControl) {
    const re = /^([a-zA-Z0-9_\+\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);

    if (re) {
      return null;
    }

    return {
      invalidEmail: true,
    };
  }

  passwordValid(control: FormControl) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(control.value);

    if (re) {
      return null;
    }

    return {
      invalidPass: true,
    };
  }

  constructor() { }
}
