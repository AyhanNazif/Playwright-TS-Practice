import { APIRequestContext, APIResponse } from "@playwright/test";
import { AuthenticationHolder } from "./commons/AuthenticationHolder";
import { BaseURL } from "./commons/BaseURL";

export class ApiUsers {

    private readonly request: APIRequestContext
    private readonly authenticationHolder: AuthenticationHolder
    private readonly baseUrl = new BaseURL()

    public constructor(request:APIRequestContext, authenticationHolder: AuthenticationHolder) {
        this.request = request
        this.authenticationHolder = authenticationHolder
    }

    public async getAllUsers(): Promise<APIResponse> {

        return await this.request.get(this.baseUrl.UsersUrl, {
            headers:{
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + await this.authenticationHolder.getApplicationtoken(),
            },
            params:{
                "page": 1,
                "limit": 10
            }
        })
    }

    public async getUser(id:number): Promise<APIResponse> {

        return await this.request.get(this.baseUrl.UsersUrl + "/" + id, {
            headers:{
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + await this.authenticationHolder.getApplicationtoken(),
            }
        })
    }

    public async postUser(postData:any): Promise<APIResponse> {

        return await this.request.post(this.baseUrl.UsersUrl, {
            data: postData,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await this.authenticationHolder.getApplicationtoken(),
            }
        })
    }    

    public async putUser(id:number, putData:any): Promise<APIResponse> {

        return await this.request.put(this.baseUrl.UsersUrl + "/" +id, {
            data: putData,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await this.authenticationHolder.getApplicationtoken(),
            }
        })
    }      

    public async patchUser(id:number, patchData:any): Promise<APIResponse> {

        return await this.request.patch(this.baseUrl.UsersUrl + "/" +id, {
            data: patchData,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await this.authenticationHolder.getApplicationtoken(),
            }
        })
    }      
    
    public async deleteUser(id:number): Promise<APIResponse> {

        return await this.request.delete(this.baseUrl.UsersUrl + "/" +id, {
            headers:{
                'Authorization': 'Bearer ' + await this.authenticationHolder.getApplicationtoken(),
            }
        })
    }    
}