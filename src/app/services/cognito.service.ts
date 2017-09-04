import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment"

import {
  AuthenticationDetails,
  CognitoIdentityServiceProvider,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool

} from "amazon-cognito-identity-js";

import * as AWS from "aws-sdk/global";
import * as awsservice from "aws-sdk/lib/service";
import * as CognitoIdentity from "aws-sdk/clients/cognitoidentity";

export interface CognitoCallback{
  cognitoCallback(message: string,result:any):void;
}
export interface Callback {
  callback():void;
  callbackWithParam(result:any):void;
}

@Injectable()
export class CognitoUtil {
  public static _REGION = environment.region;

  public static _USER_POOL_ID = environment.userPoolId;
  public static _IDENTITY_POOL_ID = environment.identityPoolId;
  public static _CLIENT_ID = environment.clientId;

  public static _POOL_DATA:any = {
    UserPoolId: CognitoUtil._USER_POOL_ID,
    ClientId: CognitoUtil._CLIENT_ID
  };
  public cognitoCreds: AWS.CognitoIdentityCredentials;

  getUserPool(){
     return new CognitoUserPool(CognitoUtil._POOL_DATA);
    
  }

  constructor() { }

}
