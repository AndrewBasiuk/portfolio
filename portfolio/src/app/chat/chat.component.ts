import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject, Observable} from 'rxjs';

export enum RegistrationTypes {
  Login = 'login',
  SignIn = 'sign-in'
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  registrationTypes = RegistrationTypes;
  registrationTypeSub = new BehaviorSubject<string>(this.registrationTypes.SignIn);
  registrationType$ = this.registrationTypeSub as Observable<string>;


  constructor(public auth: AngularFireAuth) {}

  selectRegistrationType(type: string): void {
    this.registrationTypeSub.next(type);
  }

  send() {
    // this.auth.createUserWithEmailAndPassword('a@gmail.com', 'aaabbbbbba')
    //   .then(a => {
    //     console.log(a);
    //   })
    //   .catch(err => console.log(err));

    // const aut = this.auth;
    //
    // aut.signInWithEmailAndPassword('a@gmail.com', 'aaabbbbbba')
    //   .then((user) => {
    //     console.log(user);
    //   });
  }

  ngOnInit(): void {
  }

}
