import { expect, type Locator, type Page } from "@playwright/test";

export class CartPage {

    public readonly page: Page
    private readonly allProducts: Locator
    public readonly checkoutButton: Locator
    public readonly continueShoppingButton: Locator

    public constructor(page: Page) {
        this.page = page
        this.allProducts = page.locator(".cart_list")
        this.checkoutButton = page.getByRole("button", {name:"Checkout"})
        this.continueShoppingButton = page.getByRole("button", {name:"Continue Shopping"})
    }

    private FindItemWithSelectedName(name:string): Locator {
        return this.allProducts.locator(".cart_item", { hasText: name })
    }

    public async FindProductFromCart(name:string, price:string, quantity:string) {

        const product = this.FindItemWithSelectedName(name)

        await expect(product.locator(".inventory_item_name")).toHaveText(name)
        await expect(product.locator(".inventory_item_price")).toHaveText(price)
        await expect(product.locator(".cart_quantity")).toHaveText(quantity)
    }

    public async RemoveProductFromCart(name:string) {

        const product = this.FindItemWithSelectedName(name)

        await expect(product.getByRole("button", {name:"Remove"})).toBeEnabled();
        await product.getByRole("button", {name:"Remove"}).click()
    }
}