import { APIRequestContext, APIResponse } from "@playwright/test";
import { AuthToken } from "../models/AuthTokenInterface";
import { BaseURL } from "../commons/BaseURL";

export class AuthenticationHolder {

    private readonly request:APIRequestContext
    private readonly url = new BaseURL()
    private static accessToken:string = ""
    private static expiresAt:number = 0

    public constructor(request:APIRequestContext) {
        this.request = request
    }

    private async createApplicationToken() {

        const authData = {
            "email": "qa@demo.io",
            "password": "Password123"
        }

        const response: APIResponse = await this.request.post(this.url.AuthUrl + "/login", {
            data: authData
        })

        const authToken = await response.json() as AuthToken
        AuthenticationHolder.accessToken = authToken.data.accessToken
        AuthenticationHolder.expiresAt = Date.now() + (authToken.data.expiresIn * 1000)
    }

    public async getApplicationtoken(): Promise<string> {
        if( AuthenticationHolder.accessToken.length > 0 &&  AuthenticationHolder.expiresAt > Date.now()) {
            return  AuthenticationHolder.accessToken
        }
        await this.createApplicationToken()
        return  AuthenticationHolder.accessToken
    }
}