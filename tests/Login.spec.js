const{test,expect}=require("@playwright/test")

test("Login test",async function({page}){

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await  page.getByPlaceholder("Username").pressSequentially("Admin",{delay:200})
await page.locator("input[name='password']").fill("admin1234")
await page.locator("//button[@type='submit']").click()
//await page.waitForTimeout(5000)
await expect(page).toHaveURL(/dashboard/)
await page.getByAltText('profile picture').first().click()
await page.getByText('Logout').click()
await expect(page).toHaveURL(/login/)
}

)