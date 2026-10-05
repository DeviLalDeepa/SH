const{test,expect}=require("@playwright/test")



test("Frame", async ({ page }) => {
    let a,b;
page.goto("https://qaautomationlabs.com/testing/iframe.php")
a= page.frameLocator("//iframe[@title='iframe 1']");
await a.getByTestId('iframe1-button').click();
await page.pause();
b= await page.locator("#message").textContent()
await expect (b.includes('iframe 1 button')).toBeTruthy();
console.log(b);
});