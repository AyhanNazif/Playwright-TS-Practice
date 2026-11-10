import { expect, Locator, Page } from "@playwright/test";

export class CheckoutStepTwoPage {

    public readonly page: Page
    private readonly allProducts: Locator
    public readonly itemTotal: Locator
    public readonly tax: Locator
    public readonly totalSum: Locator
    public readonly finishButton: Locator
    public readonly cancelButton: Locator
    private readonly productName: (parent: Locator) => Locator
    private readonly productPrice: (parent: Locator) => Locator
    private readonly productQuantity: (parent: Locator) => Locator

    public constructor(page: Page) {
        this.page = page
        this.allProducts = page.locator(".cart_list")
        this.itemTotal = page.locator(".summary_subtotal_label")
        this.tax = page.locator(".summary_tax_label")
        this.totalSum = page.locator(".summary_total_label")
        this.finishButton = page.getByRole("button", {name:"Finish"})
        this.cancelButton = page.getByRole("button", {name:"Cancel"})
        this.productName = (parent: Locator) => parent.locator(".inventory_item_name")
        this.productPrice = (parent: Locator) => parent.locator(".inventory_item_price")
        this.productQuantity = (parent: Locator) => parent.locator(".cart_quantity")
    }

    private findItemWithSelectedName(name:string): Locator {
        return this.allProducts.locator(".cart_item", { hasText: name })
    }
    
    public async findProductFromCheckout(name:string, price:string, quantity:string) {
    
        const product = this.findItemWithSelectedName(name)
    
        await expect(this.productName(product)).toHaveText(name)
        await expect(this.productPrice(product)).toHaveText(price)
        await expect(this.productQuantity(product)).toHaveText(quantity)
    }

    public findCheckoutItemSize() {
        return this.allProducts.locator(".cart_item")
    }
}