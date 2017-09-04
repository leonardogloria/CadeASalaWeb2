import { Component, OnInit } from '@angular/core';
import {CognitoRegisterService} from '../services/cognito-register.service'
import {CognitoCallback} from "../services/cognito.service";
import {Router} from "@angular/router";


import { User } from '../user'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, CognitoCallback {
  user:User
  registerService:CognitoRegisterService
  errorMessage: string;
  router: Router;
  constructor(register:CognitoRegisterService,router: Router) {
    this.user = new User()
    this.registerService = register
    this.router = router;
   }

  ngOnInit() {
  }
  onSubmit() { 
    this.registerService.register(this.user,this)
   }

  cognitoCallback(message: string, result: any) {
        if (message != null) { //error
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
        } else { //success
            //move to the next step
            console.log("redirecting");
            this.router.navigate(['/register-sucesso']);
        }
    }


}
