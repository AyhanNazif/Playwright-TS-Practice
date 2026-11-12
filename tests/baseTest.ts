import{ test as base, expect } from "@playwright/test"
import { PomManager } from "../pages/PomManager"
import { AuthenticationHolder } from '../api/commons/AuthenticationHolder'
import {ApiManager} from '../api/ApiManager'
import { users } from "../dataTestConfig"

type MyFixtures = {
    pomManager: PomManager,
    apiManager: ApiManager,
    authenticationHolder: AuthenticationHolder,
    loggedIn: PomManager
}

const test = base.extend<MyFixtures>({
    pomManager: async ({page, baseURL}, use) => {
        const pomManage = new PomManager(page)
        await pomManage.homePage.open(baseURL)
        await use(pomManage)
    },
    authenticationHolder: async ({request}, use) => {
        const authHolder = new AuthenticationHolder(request)
        await authHolder.getApplicationtoken()
        await use(authHolder)
    },
    apiManager: async ({request, authenticationHolder}, use) => {
        const apiManage = new ApiManager(request, authenticationHolder)
        await use(apiManage)
    },
    loggedIn: async({pomManager, baseURL}, use) => {
        await pomManager.homePage.login(users.standard_user.username, users.standard_user.password)
        await pomManager.homePage.page.waitForURL(baseURL + "/inventory.html")
        await use(pomManager)
    }
})

export { test, expect }