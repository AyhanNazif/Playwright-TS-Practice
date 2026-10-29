import { expect, Locator, Page } from "@playwright/test";

export class InventoryPage {

    public readonly page: Page
    private readonly allProducts: Locator

    public constructor(page: Page) {
        this.page = page
        this.allProducts = page.locator(".inventory_list")
    }

    private FindItemWithSelectedName(name:string): Locator {
        return this.allProducts.locator(".inventory_item", {hasText: name})
    }

    public async FindProductFromCatalog(name: string, price: string) {

        const product = this.FindItemWithSelectedName(name)
        await expect(product.locator(".inventory_item_name")).toHaveText(name)
        await expect(product.locator(".inventory_item_price")).toHaveText(price)
    }

    public async ProductAddToCart(name:string) {
        
        const product = this.FindItemWithSelectedName(name)
        await expect(product.getByRole("button", {name: "Add To Cart"})).toBeEnabled()
        await product.getByRole("button", {name: "Add To Cart"}).click()
    }

        public async ProductRemoveFromCart(name:string) {
        
        const product = this.FindItemWithSelectedName(name)
        await expect(product.getByRole("button", {name: "Remove"})).toBeEnabled()
        await product.getByRole("button", {name: "Remove"}).click()
    }
}