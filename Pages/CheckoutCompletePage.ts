import { type Locator, type Page } from "@playwright/test";

export class CheckoutCompletePage {

    public readonly page: Page
    public readonly successfullyOrderMessage: Locator
    public readonly backHomeButton: Locator

    public constructor(page: Page) {
        this.page = page
        this.successfullyOrderMessage = page.locator(".complete-header")
        this.backHomeButton = page.getByRole("button", {name:"Back Home"})
    }
}