import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {routing} from './app.routes';

import { AppComponent } from './app.component';

import { CourseService } from './services/course.service';
import { DisciplineService } from './services/discipline.service';
import { LocationService } from './services/location.service';
import { RegisterComponent } from './register/register.component';
import { RegisterSucessoComponent } from './register/register.sucesso.component';
import {CognitoUtil} from './services/cognito.service'
import {CognitoRegisterService} from './services/cognito-register.service'


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterSucessoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    CourseService,
    DisciplineService,
    LocationService,
    CognitoRegisterService,
    CognitoUtil

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
