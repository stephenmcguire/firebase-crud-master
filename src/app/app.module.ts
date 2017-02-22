// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginPageComponent } from './login-page/login-page.component';
import {RouterModule, Routes} from "@angular/router";
import {AF} from "../providers/af";
import { HomePageComponent } from './home-page/home-page.component';
export const firebaseConfig = {
  apiKey: 'AIzaSyBWZ2UsqHFIRbT2ytqiambddH5UPkErHvo',
  authDomain: 'fir-crud-7b1eb.firebaseapp.com',
  databaseURL: 'https://fir-crud-7b1eb.firebaseio.com',
  storageBucket: 'fir-crud-7b1eb.appspot.com',
  messagingSenderId: '488487185876'
};
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];
@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent, LoginPageComponent, HomePageComponent ],
  bootstrap: [ AppComponent ],
  providers: [AF]
})
export class AppModule {}
