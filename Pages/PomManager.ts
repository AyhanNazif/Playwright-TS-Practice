import { HomePage } from "./HomePage";
import { InventoryPage } from "./InventoryPage";
import { CartPage } from "./CartPage";
import {CheckoutStepOnePage} from "./CheckoutStepOnePage"
import {CheckoutStepTwoPage} from "./CheckoutStepTwoPage"
import {CheckoutCompletePage} from "./CheckoutCompletePage"
import {MainAttributesPage} from "./MainAttributesPage"
import { type Page } from "@playwright/test";

export class PomManager {

    public readonly page: Page
    public readonly homePage: HomePage
    public readonly inventoryPage: InventoryPage
    public readonly cartPage: CartPage
    public readonly checkoutStepOnePage: CheckoutStepOnePage
    public readonly checkoutStepTwoPage: CheckoutStepTwoPage
    public readonly checkoutCompletePage: CheckoutCompletePage
    public readonly mainAttributesPage: MainAttributesPage

    public constructor(page: Page) {
        this.page = page
        this.homePage = new HomePage(page)
        this.inventoryPage = new InventoryPage(page)
        this.cartPage = new CartPage(page)
        this.checkoutStepOnePage = new CheckoutStepOnePage(page)
        this.checkoutStepTwoPage = new CheckoutStepTwoPage(page)
        this.checkoutCompletePage = new CheckoutCompletePage(page)
        this.mainAttributesPage = new MainAttributesPage(page)
    }
}