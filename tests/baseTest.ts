import{ test as base, expect } from "@playwright/test"
import { PomManager } from "../pages/PomManager"
import { AuthenticationHolder } from '../api/commons/AuthenticationHolder'
import {ApiManager} from '../api/ApiManager'

type MyFixtures = {
    pomManager: PomManager,
    apiManager: ApiManager,
    authenticationHolder: AuthenticationHolder
}

const test = base.extend<MyFixtures>({
    pomManager: async ({page}, use) => {
        const pomManage = new PomManager(page)
        await pomManage.homePage.open("https://www.saucedemo.com/")
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
    }
})

export { test, expect }