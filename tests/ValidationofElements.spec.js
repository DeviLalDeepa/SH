import { expect,test } from '@playwright/test'

test('Validating the elements', async ({ page }) => {
await page.goto('https://freelance-learn-automation.vercel.app/login')
await page.getByText('New user? Signup').click()
await page.waitForURL('**signup')
console.log("Page has the Title" +await page.title())
await page.waitForLoadState('networkidle')
console.log(await page.locator("//input[@type='checkbox']").count());
let a=await page.locator("//input[@type='checkbox']").count()
expect (a).toBe(5)

})
