import { APIRequestContext } from "@playwright/test";
import { ApiUsers } from "./ApiUsers";
import { AuthenticationHolder } from "./commons/AuthenticationHolder";
import { ApiProducts } from "./ApiProducts";
import { ApiOrders } from "./ApiOrders";

export class ApiManager {

    private readonly request: APIRequestContext
    private readonly authenticationHolder: AuthenticationHolder

    private _users?: ApiUsers
    private _products?: ApiProducts
    private _orders?: ApiOrders

    public constructor(request:APIRequestContext, authenticationHolder: AuthenticationHolder) {
        this.request = request
        this.authenticationHolder = authenticationHolder
    }
 
    public get users(): ApiUsers {
        if(!this._users) {
            this._users = new ApiUsers(this.request, this.authenticationHolder)
        }
        return this._users
    }

    public get products(): ApiProducts {
        if(!this._products) {
            this._products = new ApiProducts(this.request, this.authenticationHolder)
        }
        return this._products    
    }

    public get orders(): ApiOrders {
        if(!this._orders) {
            this._orders = new ApiOrders(this.request, this.authenticationHolder)
        }
        return this._orders
    }
}