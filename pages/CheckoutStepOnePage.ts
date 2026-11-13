import { Locator, Page } from "@playwright/test";

export class CheckoutStepOnePage {

    public readonly page: Page
    private readonly firstNameField: Locator
    private readonly lastNameField: Locator
    private readonly postCodeField: Locator
    public readonly continueButton: Locator
    public readonly cancelButton: Locator

    public constructor(page: Page) {
        this.page = page
        this.firstNameField = page.locator("#first-name")
        this.lastNameField = page.locator("#last-name")
        this.postCodeField = page.locator("#postal-code")
        this.continueButton = page.locator("#continue")
        this.cancelButton = page.locator("#cancel")
    }

    public async addPersonalInformation(firstName: string, lastName:string, postCode: string) {
        await this.firstNameField.click()
        await this.firstNameField.fill(firstName)
        await this.lastNameField.fill(lastName)
        await this.postCodeField.fill(postCode)
    }
}