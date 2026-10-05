const{test,expect}=require("@playwright/test")



test("Frame", async ({ browser }) => {
   
   const context=await browser.newContext()
   const page= await context.newPage();
   page.goto("https://freelance-learn-automation.vercel.app/login")

   const [newPage]= await Promise.all(
    [

context.waitForEvent("page"),
await page.locator("(//a[contains(@href,'facebook')])[1]").click()

    ])


    
await page.waitForTimeout(5000)
   const [newPage1]= await Promise.all(
    [

context.waitForEvent("page"),
await newPage.getByText("Create new account").click()

    ])

await newPage1.locator("(//input[@type='text'])[1]").fill("Devi")
await page.waitForTimeout(15000)
await newPage.close();

await newPage1.close();


});