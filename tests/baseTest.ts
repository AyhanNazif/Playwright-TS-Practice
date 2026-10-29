import{ test as base, expect } from "@playwright/test"
import { PomManager } from "../Pages/PomManager"
import { users } from "../dataTestConfig"

type MyFixtures = {
    pomManager: PomManager
}

const test = base.extend<MyFixtures>({
    pomManager: async ({page}, use) => {
        const pomManage = new PomManager(page)
        await pomManage.homePage.Open("https://www.saucedemo.com/")
        await use(pomManage)
    }
})

export { test, expect }