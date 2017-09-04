import { Component, OnInit } from '@angular/core';
import {CognitoRegisterService} from '../services/cognito-register.service'
import {CognitoCallback} from "../services/cognito.service";


import { User } from '../user'
@Component({
  selector: 'app-register-sucesso',
  templateUrl: './register.sucesso.component.html',
  styleUrls: ['./register.sucesso.component.css']
})
export class RegisterSucessoComponent implements OnInit {
  user:User
  registerService:CognitoRegisterService
  errorMessage: string;
  constructor(register:CognitoRegisterService) {
    this.user = new User()
    this.registerService = register
   }

  ngOnInit() {
  }
 




}
