const{test,expect}=require("@playwright/test")



test("Javascript Alert", async ({ page }) => {
    let a,b;
page.goto("https://qaautomationlabs.com/testing/javaScript-alert.php")

page.on('dialog', async(dialogWindow)=>{
a = dialogWindow.type();
console.log('Type is '+a)
b= dialogWindow.message();
console.log('the message is '+b)
dialogWindow.accept();
})


await page.getByTestId("alert-show-alert-btn").click();
await page.waitForTimeout(5000)

await page.getByTestId("alert-show-confirm-btn").click();

await page.waitForTimeout(5000)
await page.locator("button[title='Show JavaScript prompt']").click()
//console.log('Im here')
await page.waitForTimeout(5000)


});