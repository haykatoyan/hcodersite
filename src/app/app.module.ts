import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SuccessfullSignUpComponent } from './successfull-sign-up/successfull-sign-up.component';

const appRoutes: Routes = [
  { path: 'signUp', component: SignUpComponentComponent },
  { path: '', component: WelcomeComponent },
  { path: 'signUpSuccess', component: SuccessfullSignUpComponent },
  
  
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponentComponent,
    WelcomeComponent,
    SuccessfullSignUpComponent
  ],
  imports: [
	RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true }), BrowserModule, FormsModule ,AlertModule.forRoot(), HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
