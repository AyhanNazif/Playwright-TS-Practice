import { expect, Locator, Page } from "@playwright/test";

export class InventoryPage {

    public readonly page: Page
    private readonly allProducts: Locator
    private readonly productName: (parent: Locator) => Locator
    private readonly productPrice: (parent: Locator) => Locator
    private readonly addToCartButton: (parent: Locator) => Locator
    private readonly removeFromCartButton: (parent: Locator) => Locator

    public constructor(page: Page) {
        this.page = page
        this.allProducts = page.locator(".inventory_list")
        this.productName = (parent: Locator) => parent.locator(".inventory_item_name")
        this.productPrice = (parent: Locator) => parent.locator(".inventory_item_price")
        this.addToCartButton = (parent: Locator) => parent.getByRole("button", {name: "Add To Cart"})
        this.removeFromCartButton = (parent: Locator) => parent.getByRole("button", {name:"Remove"})
    }

    private findItemWithSelectedName(name:string): Locator {
        return this.allProducts.locator(".inventory_item", {hasText: name})
    }

    public async findProductFromCatalog(name: string, price: string) {

        const product = this.findItemWithSelectedName(name)
        await expect(this.productName(product)).toHaveText(name)
        await expect(this.productPrice(product)).toHaveText(price)
    }

    public async productAddToCart(name:string) {
        
        const product = this.findItemWithSelectedName(name)
        await expect(this.addToCartButton(product)).toBeEnabled()
        await this.addToCartButton(product).click()
    }

        public async productRemoveFromCart(name:string) {
        
        const product = this.findItemWithSelectedName(name)
        await expect(this.removeFromCartButton(product)).toBeEnabled()
        await this.removeFromCartButton(product).click()
    }
}