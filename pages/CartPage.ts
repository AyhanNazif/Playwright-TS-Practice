import { expect, Locator, Page } from "@playwright/test";

export class CartPage {

    public readonly page: Page
    private readonly allProducts: Locator
    public readonly checkoutButton: Locator
    public readonly continueShoppingButton: Locator
    private readonly productName: (parent: Locator) => Locator
    private readonly productPrice: (parent: Locator) => Locator
    private readonly productQuantity: (parent: Locator) => Locator
    private readonly removeFromCartButton: (parent: Locator) => Locator

    public constructor(page: Page) {
        this.page = page
        this.allProducts = page.locator(".cart_list")
        this.checkoutButton = page.getByRole("button", {name:"Checkout"})
        this.continueShoppingButton = page.getByRole("button", {name:"Continue Shopping"})
        this.productName = (parent: Locator) => parent.locator(".inventory_item_name")
        this.productPrice = (parent: Locator) => parent.locator(".inventory_item_price")
        this.productQuantity = (parent: Locator) => parent.locator(".cart_quantity")
        this.removeFromCartButton = (parent: Locator) => parent.getByRole("button", {name:"Remove"})
    }

    private findItemWithSelectedName(name:string): Locator {
        return this.allProducts.locator(".cart_item", { hasText: name })
    }

    public async findProductFromCart(name:string, price:string, quantity:string) {

        const product = this.findItemWithSelectedName(name)

        await expect(this.productName(product)).toHaveText(name)
        await expect(this.productPrice(product)).toHaveText(price)
        await expect(this.productQuantity(product)).toHaveText(quantity)
    }

    public async removeProductFromCart(name:string) {

        const product = this.findItemWithSelectedName(name)

        await expect(this.removeFromCartButton(product)).toBeEnabled();
        await this.removeFromCartButton(product).click()
    }

    public findCartItemSize() {
        return this.allProducts.locator(".cart_item")
    }
}