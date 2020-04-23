import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from './login-page.actions';

export interface Login {
  username: string;
  password: string;
};

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  login$: Observable< { username: string, password: string }>;
  constructor(private store: Store< { username: string, password: string } >) { 
    //this.login$ = store.pipe(select( { username: 'username', password: 'password'}));
  }

  ngOnInit(): void {
  }

  onSubmit(username: string, password: string) {
    this.store.dispatch(login( { username: username, password: password }));
  }

}
