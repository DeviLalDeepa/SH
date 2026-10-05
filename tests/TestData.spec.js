import {expect,test} from '@playwright/test'
const testdata= JSON.parse(JSON.stringify(require("../TestData.json")))
test('TestData', async ({page})=>{
await page.goto('https://freelance-learn-automation.vercel.app/login')
await page.getByPlaceholder('Enter Email').fill(testdata.username)
await page.waitForTimeout(5000)
})