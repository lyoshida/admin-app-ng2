import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';

import {AuthProviders, AuthMethods, AngularFireModule} from "angularfire2/index";
import {AdminAppRoutingModule} from "./app-routing.module";

const myFirebaseConfig = {
  apiKey: "AIzaSyBAwvNpR_hVDjxMBHc9C7n9tGVV_Z0QGPY",
  authDomain: "local-ads-1a00c.firebaseapp.com",
  databaseURL: "https://local-ads-1a00c.firebaseio.com",
  storageBucket: "local-ads-1a00c.appspot.com",
  messagingSenderId: "608567637277"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
    FormsModule,
    HttpModule,
    AdminAppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
