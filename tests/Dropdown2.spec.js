const{test,expect}=require("@playwright/test")

test("Hover",async function({page}){
await page.goto("https://freelance-learn-automation.vercel.app/login")
let s= await page.title();
console.log(s);

await expect(page).toHaveTitle('Learn Automation Courses')
await page.locator("#email1").fill("admin@email.com")   
await page.locator("#password1").fill("admin@123")
await page.getByRole("button",{name:"Sign in"}).click()
await page.getByText('Manage', { exact: true }).hover()
await page.getByText('Manage Courses', { exact: true }).click()
})