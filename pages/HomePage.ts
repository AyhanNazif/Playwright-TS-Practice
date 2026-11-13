import { Locator, Page } from "@playwright/test";

export class HomePage {

    public readonly page: Page
    public readonly mainTitle : Locator
    private readonly username: Locator
    private readonly password: Locator
    private readonly loginButton: Locator
    public readonly loginCredentials: Locator

    public constructor(page: Page) {
        this.page = page;
        this.mainTitle = page.locator(".login-logo")
        this.username = page.locator("#user-name")
        this.password = page.locator("#password")
        this.loginButton = page.locator("#login-button")
        this.loginCredentials = page.locator("#login_credentials")
    }

    public async open(url: any) {
        await this.page.goto(url)
    }

    public async login(username: string, password: string) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click();
    }
}