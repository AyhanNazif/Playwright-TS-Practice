import { HomePage } from "./HomePage";
import { InventoryPage } from "./InventoryPage";
import { CartPage } from "./CartPage";
import { CheckoutStepOnePage } from "./CheckoutStepOnePage"
import { CheckoutStepTwoPage } from "./CheckoutStepTwoPage"
import { CheckoutCompletePage } from "./CheckoutCompletePage"
import { MainAttributesPage } from "./MainAttributesPage"
import { Page } from "@playwright/test";

export class PomManager {

    private readonly page: Page

    private _homePage?: HomePage
    private _inventoryPage?: InventoryPage
    private _cartPage?: CartPage
    private _checkoutStepOnePage?: CheckoutStepOnePage
    private _checkoutStepTwoPage?: CheckoutStepTwoPage
    private _checkoutCompletePage?: CheckoutCompletePage
    private _mainAttributesPage?: MainAttributesPage

    public constructor(page: Page) {
        this.page = page
    }

    public get homePage(): HomePage {
        if(!this._homePage) {
            this._homePage = new HomePage(this.page)
        }
        return this._homePage
    }

    public get inventoryPage(): InventoryPage {
        if(!this._inventoryPage) {
            this._inventoryPage = new InventoryPage(this.page)
        }
        return this._inventoryPage
    }

    public get cartPage(): CartPage {
        if(!this._cartPage) {
            this._cartPage = new CartPage(this.page)
        }
        return this._cartPage
    }

    public get checkoutStepOnePage(): CheckoutStepOnePage {
        if(!this._checkoutStepOnePage) {
            this._checkoutStepOnePage = new CheckoutStepOnePage(this.page)
        }
        return this._checkoutStepOnePage
    }

    public get checkoutStepTwoPage(): CheckoutStepTwoPage {
        if(!this._checkoutStepTwoPage) {
            this._checkoutStepTwoPage = new CheckoutStepTwoPage(this.page)
        }
        return this._checkoutStepTwoPage
    }

    public get checkoutCompletePage(): CheckoutCompletePage {
        if(!this._checkoutCompletePage) {
            this._checkoutCompletePage = new CheckoutCompletePage(this.page)
        }
        return this._checkoutCompletePage
    }

    public get mainAttributesPage(): MainAttributesPage {
        if(!this._mainAttributesPage) {
            this._mainAttributesPage = new MainAttributesPage(this.page)
        }
        return this._mainAttributesPage
    }
}