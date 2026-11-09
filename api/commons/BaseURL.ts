export class BaseURL {

    private readonly BaseUrl:string = "https://api.qaautomationlabs.com/v1"
    public readonly AuthUrl:string = this.BaseUrl + "/auth"
    public readonly UsersUrl:string = this.BaseUrl + "/users"
    public readonly ProductsUrl:string = this.BaseUrl + "/products"
    public readonly OrdersUrl:string = this.BaseUrl + "/orders"
    public readonly CustomersUrl:string = this.BaseUrl + "/customers"
}