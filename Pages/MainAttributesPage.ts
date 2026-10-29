import { type Locator, type Page } from "@playwright/test";

export class MainAttributesPage {

    public readonly page: Page
    public readonly shoppingCartButton: Locator
    public readonly shoppingCartBadge: Locator
    public readonly burgerMenu: Locator
    public readonly title: Locator
    public readonly logoutButton: Locator

    public constructor(page: Page) {
        this.page = page
        this.shoppingCartButton = page.locator(".shopping_cart_link")
        this.shoppingCartBadge = page.locator(".shopping_cart_badge")
        this.burgerMenu = page.locator("#react-burger-menu-btn")
        this.title = page.locator(".title");
        this.logoutButton = page.locator("#logout_sidebar_link")
    }
}