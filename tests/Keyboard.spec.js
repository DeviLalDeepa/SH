const{test,expect}=require("@playwright/test")

test("Keyboard Operations",async function({page}){

await page.goto('https://demowebshop.tricentis.com/')
const forType = page.locator("input[id='small-searchterms']")
await forType.focus()
await page.waitForTimeout(2000)
await forType.fill("tricentis")
await page.keyboard.press("Shift")
//const i=0;
for (let i=0;i<5;i++){

    await page.keyboard.press("Backspace")
}
await page.waitForTimeout(2000)
})