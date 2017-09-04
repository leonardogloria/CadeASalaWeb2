import {Inject, Injectable } from '@angular/core';
import {AuthenticationDetails, CognitoUser, CognitoUserAttribute} from "amazon-cognito-identity-js";
import {CognitoCallback, CognitoUtil} from "./cognito.service";

import * as AWS from "aws-sdk/global";

import {User} from "../user"


@Injectable()
export class CognitoRegisterService {

   constructor(@Inject(CognitoUtil) public cognitoUtil: CognitoUtil) {

    }
    register(user: User, callback: CognitoCallback): void {
        console.log("UserRegistrationService: user is " + user);

        let attributeList = [];

        let dataEmail = {
            Name: 'email',
            Value: user.email
        };
          
        let dataName = {
            Name: 'name',
            Value: user.name
        };
        let dataPolo = {
            Name: 'custom:polo',
            Value: user.polo
        };

        attributeList.push(new CognitoUserAttribute(dataEmail));
        attributeList.push(new CognitoUserAttribute(dataName));
        attributeList.push(new CognitoUserAttribute(dataPolo));

        this.cognitoUtil.getUserPool().signUp(user.email, user.password, attributeList, null, function (err, result) {
            if (err) {
                callback.cognitoCallback(err.message, null);
            } else {
                console.log("UserRegistrationService: registered user is  " + JSON.stringify(result));
                callback.cognitoCallback(null, result);
            }
        });

    }


}
