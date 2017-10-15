import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AllCodesComponent } from './all-codes/all-codes.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditorComponent } from './editor/editor.component';

const appRoutes: Routes = [
  { path: 'signUp', component: SignUpComponentComponent },
  { path: '', component: WelcomeComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'myAccount', component: MyAccountComponent },
  { path: 'allCodes', component: AllCodesComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponentComponent,
    WelcomeComponent,
    AllCodesComponent,
    MyAccountComponent,
    LessonsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    EditorComponent
  ],
  imports: [
	  RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true }), 
    BrowserModule, FormsModule ,AlertModule.forRoot(), HttpModule,
    BrowserAnimationsModule, MatButtonModule, MatCardModule, 
    MatMenuModule, MatToolbarModule, MatIconModule, MatCheckboxModule, BootstrapModalModule,
    BootstrapModalModule.forRoot({container:document.body})
  ],
  entryComponents: [
      EditorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
