import { Component, OnInit } from '@angular/core';

import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFire) { }

  ngOnInit() {
  }

  login() {
    console.log('logging');
    this.af.auth.login();
  }
}
