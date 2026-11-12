import { APIRequestContext, APIResponse } from "@playwright/test";
import { AuthenticationHolder } from "./commons/AuthenticationHolder";
import { BaseURL } from "./commons/BaseURL";

export class ApiOrders {

    private readonly request: APIRequestContext
    private readonly authenticationHolder: AuthenticationHolder
    private readonly baseUrl = new BaseURL()

    public constructor(request:APIRequestContext, authenticationHolder: AuthenticationHolder) {
        this.request = request
        this.authenticationHolder = authenticationHolder
    }

    public async getAllOrders(): Promise<APIResponse> {

        return await this.request.get(this.baseUrl.OrdersUrl, {
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

    public async getOrder(id:number): Promise<APIResponse> {

        return await this.request.get(this.baseUrl.OrdersUrl + "/" + id, {
            headers:{
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + await this.authenticationHolder.getApplicationtoken(),
            }
        })
    }

    public async postOrder(postData:any): Promise<APIResponse> {

        return await this.request.post(this.baseUrl.OrdersUrl, {
            data: postData,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await this.authenticationHolder.getApplicationtoken(),
            }
        })
    }

    public async putOrder(id:number, putData:any): Promise<APIResponse> {

        return await this.request.put(this.baseUrl.OrdersUrl + "/" + id, {
            data:putData,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await this.authenticationHolder.getApplicationtoken(),
            }
        })
    }

    public async patchOrder(id:number, patchData:any): Promise<APIResponse> {

        return await this.request.patch(this.baseUrl.OrdersUrl + "/" + id, {
            data:patchData,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await this.authenticationHolder.getApplicationtoken(),
            }
        })
    }

    public async deleteOrder(id:number): Promise<APIResponse> {

        return await this.request.delete(this.baseUrl.OrdersUrl + "/" + id, {
            headers:{
                'Authorization': 'Bearer ' + await this.authenticationHolder.getApplicationtoken(),
            }
        })
    }
}