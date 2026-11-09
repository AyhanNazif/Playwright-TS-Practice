import { APIRequestContext, APIResponse } from "@playwright/test";
import { AuthenticationHolder } from "./commons/AuthenticationHolder";
import { BaseURL } from "./commons/BaseURL";

export class ApiProducts {

    private readonly request: APIRequestContext
    private readonly authenticationHolder: AuthenticationHolder
    private readonly baseUrl = new BaseURL()

    public constructor(request:APIRequestContext, authenticationHolder: AuthenticationHolder) {
        this.request = request
        this.authenticationHolder = authenticationHolder
    }

    public async getAllProducts(): Promise<APIResponse> {

        return await this.request.get(this.baseUrl.ProductsUrl, {
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

    public async getProduct(id:number): Promise<APIResponse> {

        return await this.request.get(this.baseUrl.ProductsUrl + "/" + id, {
            headers:{
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + await this.authenticationHolder.getApplicationtoken(),
            }
        })
    }

    public async postProduct(postData:any): Promise<APIResponse> {

        return await this.request.post(this.baseUrl.ProductsUrl, {
            data: postData,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await this.authenticationHolder.getApplicationtoken(),
            }
        })
    }

    public async putProduct(id:number, putData:any): Promise<APIResponse> {

        return await this.request.put(this.baseUrl.ProductsUrl + "/" + id, {
            data:putData,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await this.authenticationHolder.getApplicationtoken(),
            }
        })
    }

    public async patchProduct(id:number, patchData:any): Promise<APIResponse> {

        return await this.request.patch(this.baseUrl.ProductsUrl + "/" + id, {
            data:patchData,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await this.authenticationHolder.getApplicationtoken(),
            }
        })
    }

    public async deleteProduct(id:number): Promise<APIResponse> {

        return await this.request.delete(this.baseUrl.ProductsUrl + "/" + id, {
            headers:{
                'Authorization': 'Bearer ' + await this.authenticationHolder.getApplicationtoken(),
            }
        })
    }
}