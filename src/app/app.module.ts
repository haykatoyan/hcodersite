import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'signUp', component: SignUpComponentComponent },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponentComponent
  ],
  imports: [
	RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true }), BrowserModule, FormsModule ,AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
