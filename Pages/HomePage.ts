import { type Locator, type Page } from "@playwright/test";

export class HomePage {

    public readonly page: Page
    public readonly mainTitle : Locator
    public readonly username: Locator
    public readonly password: Locator
    public readonly loginButton: Locator
    public readonly loginCredentials: Locator

    public constructor(page: Page) {
        this.page = page;
        this.mainTitle = page.locator(".login-logo")
        this.username = page.locator("#user-name")
        this.password = page.locator("#password")
        this.loginButton = page.locator("#login-button")
        this.loginCredentials = page.locator("#login_credentials")
    }

    public async Open(url: string) {
        await this.page.goto(url)
    }

    public async Login(username: string, password: string) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click();
    }
}