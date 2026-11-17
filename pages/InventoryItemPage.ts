import { Locator, Page } from "@playwright/test";

export class InventoryItemPage {

    public page: Page
    public name: Locator
    public description: Locator
    public price: Locator
    public addToCartButton: Locator
    public removeButton: Locator
    public backToProductsButton: Locator

    public constructor(page: Page) {
        this.page = page
        this.name = page.locator(".inventory_details_name")
        this.description = page.locator(".inventory_details_desc")
        this.price = page.locator(".inventory_details_price")
        this.addToCartButton = page.locator("#add-to-cart")
        this.removeButton = page.locator("#remove")
        this.backToProductsButton = page.locator("#back-to-products")
    }
}