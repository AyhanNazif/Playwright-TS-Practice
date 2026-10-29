import { test, expect } from './baseTest'
import { users } from "../dataTestConfig"

test("E2E positive test with ordered one product", async ({pomManager}) => {
  
  await pomManager.homePage.Login(users.standard_user.username, users.standard_user.password)
  await pomManager.inventoryPage.page.waitForURL("https://www.saucedemo.com/inventory.html")
  await expect(pomManager.mainAttributesPage.title).toHaveText("Products")
  await pomManager.inventoryPage.FindProductFromCatalog("Sauce Labs Backpack", "$29.99")
  await pomManager.inventoryPage.ProductAddToCart("Sauce Labs Backpack")
  await expect(pomManager.mainAttributesPage.shoppingCartBadge).toHaveText("1")
  await expect(pomManager.mainAttributesPage.shoppingCartButton).toBeEnabled()
  await pomManager.mainAttributesPage.shoppingCartButton.click()
  await pomManager.cartPage.page.waitForURL("https://www.saucedemo.com/cart.html")
  await expect(pomManager.mainAttributesPage.title).toHaveText("Your Cart")
  await pomManager.cartPage.FindProductFromCart("Sauce Labs Backpack","$29.99", "1")
  await expect(pomManager.cartPage.checkoutButton).toBeEnabled();
  await pomManager.cartPage.checkoutButton.click();
  await pomManager.checkoutStepOnePage.page.waitForURL("https://www.saucedemo.com/checkout-step-one.html")
  await expect(pomManager.mainAttributesPage.title).toHaveText("Checkout: Your Information")
  await pomManager.checkoutStepOnePage.AddPersonalInformation("Ayhan","Nazif","7000")
  await expect(pomManager.checkoutStepOnePage.continueButton).toBeEnabled()
  await pomManager.checkoutStepOnePage.continueButton.click()
  await pomManager.checkoutStepTwoPage.page.waitForURL("https://www.saucedemo.com/checkout-step-two.html")
  await expect(pomManager.mainAttributesPage.title).toHaveText("Checkout: Overview")
  await pomManager.checkoutStepTwoPage.FindProductFromCheckout("Sauce Labs Backpack", "$29.99", "1")
  await expect(pomManager.checkoutStepTwoPage.itemTotal).toHaveText("Item total: $29.99")
  await expect(pomManager.checkoutStepTwoPage.tax).toHaveText("Tax: $2.40")
  await expect(pomManager.checkoutStepTwoPage.totalSum).toHaveText("Total: $32.39")
  await expect(pomManager.checkoutStepTwoPage.finishButton).toBeEnabled()
  await pomManager.checkoutStepTwoPage.finishButton.click()
  await pomManager.checkoutCompletePage.page.waitForURL("https://www.saucedemo.com/checkout-complete.html")
  await expect(pomManager.mainAttributesPage.title).toHaveText("Checkout: Complete!")
  await expect(pomManager.checkoutCompletePage.successfullyOrderMessage).toHaveText("Thank you for your order!")
  await pomManager.mainAttributesPage.burgerMenu.click()
  await expect(pomManager.mainAttributesPage.logoutButton).toBeVisible();
  await pomManager.mainAttributesPage.logoutButton.click();
  await expect(pomManager.homePage.page).toHaveURL("https://www.saucedemo.com/")
})

test("E2E positive test with ordered two products", async ({pomManager}) => {
  
  await pomManager.homePage.Login(users.standard_user.username, users.standard_user.password)
  await pomManager.inventoryPage.page.waitForURL("https://www.saucedemo.com/inventory.html")
  await expect(pomManager.mainAttributesPage.title).toHaveText("Products")
  await pomManager.inventoryPage.FindProductFromCatalog("Sauce Labs Backpack", "$29.99")
  await pomManager.inventoryPage.FindProductFromCatalog("Test.allTheThings() T-Shirt (Red)", "$15.99")
  await pomManager.inventoryPage.ProductAddToCart("Sauce Labs Backpack")
  await pomManager.inventoryPage.ProductAddToCart("Test.allTheThings() T-Shirt (Red)")
  await expect(pomManager.mainAttributesPage.shoppingCartBadge).toHaveText("2")
  await expect(pomManager.mainAttributesPage.shoppingCartButton).toBeEnabled()
  await pomManager.mainAttributesPage.shoppingCartButton.click()
  await pomManager.cartPage.page.waitForURL("https://www.saucedemo.com/cart.html")
  await expect(pomManager.mainAttributesPage.title).toHaveText("Your Cart")
  await pomManager.cartPage.FindProductFromCart("Sauce Labs Backpack","$29.99", "1")
  await pomManager.cartPage.FindProductFromCart("Test.allTheThings() T-Shirt (Red)", "$15.99", "1")
  await expect(pomManager.cartPage.checkoutButton).toBeEnabled();
  await pomManager.cartPage.checkoutButton.click();
  await pomManager.checkoutStepOnePage.page.waitForURL("https://www.saucedemo.com/checkout-step-one.html")
  await expect(pomManager.mainAttributesPage.title).toHaveText("Checkout: Your Information")
  await pomManager.checkoutStepOnePage.AddPersonalInformation("Ayhan","Nazif","7000")
  await expect(pomManager.checkoutStepOnePage.continueButton).toBeEnabled()
  await pomManager.checkoutStepOnePage.continueButton.click()
  await pomManager.checkoutStepTwoPage.page.waitForURL("https://www.saucedemo.com/checkout-step-two.html")
  await expect(pomManager.mainAttributesPage.title).toHaveText("Checkout: Overview")
  await pomManager.checkoutStepTwoPage.FindProductFromCheckout("Sauce Labs Backpack", "$29.99", "1")
  await pomManager.checkoutStepTwoPage.FindProductFromCheckout("Test.allTheThings() T-Shirt (Red)", "$15.99", "1")
  await expect(pomManager.checkoutStepTwoPage.itemTotal).toHaveText("Item total: $45.98")
  await expect(pomManager.checkoutStepTwoPage.tax).toHaveText("Tax: $3.68")
  await expect(pomManager.checkoutStepTwoPage.totalSum).toHaveText("Total: $49.66")
  await expect(pomManager.checkoutStepTwoPage.finishButton).toBeEnabled()
  await pomManager.checkoutStepTwoPage.finishButton.click()
  await pomManager.checkoutCompletePage.page.waitForURL("https://www.saucedemo.com/checkout-complete.html")
  await expect(pomManager.mainAttributesPage.title).toHaveText("Checkout: Complete!")
  await expect(pomManager.checkoutCompletePage.successfullyOrderMessage).toHaveText("Thank you for your order!")
  await pomManager.mainAttributesPage.burgerMenu.click()
  await expect(pomManager.mainAttributesPage.logoutButton).toBeVisible();
  await pomManager.mainAttributesPage.logoutButton.click();
  await expect(pomManager.homePage.page).toHaveURL("https://www.saucedemo.com/")
})


// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
