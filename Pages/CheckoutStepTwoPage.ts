import { expect, type Locator, type Page } from "@playwright/test";

export class CheckoutStepTwoPage {

    public readonly page: Page
    private readonly allProducts: Locator
    public readonly itemTotal: Locator
    public readonly tax: Locator
    public readonly totalSum: Locator
    public readonly finishButton: Locator
    public readonly cancelButton: Locator

    public constructor(page: Page) {
        this.page = page
        this.allProducts = page.locator(".cart_list")
        this.itemTotal = page.locator(".summary_subtotal_label")
        this.tax = page.locator(".summary_tax_label")
        this.totalSum = page.locator(".summary_total_label")
        this.finishButton = page.getByRole("button", {name:"Finish"})
        this.cancelButton = page.getByRole("button", {name:"Cancel"})
    }

        private FindItemWithSelectedName(name:string): Locator {
            return this.allProducts.locator(".cart_item", { hasText: name })
        }
    
        public async FindProductFromCheckout(name:string, price:string, quantity:string) {
    
            const product = this.FindItemWithSelectedName(name)
    
            await expect(product.locator(".inventory_item_name")).toHaveText(name)
            await expect(product.locator(".inventory_item_price")).toHaveText(price)
            await expect(product.locator(".cart_quantity")).toHaveText(quantity)
        }
}