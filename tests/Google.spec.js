const{test,expect}=require('@playwright/test')
test("Google test",async function({page}){
await page.goto("http://www.google.com")
const URL= await page.url()
console.log("The URL invoked is  " +URL)
const Title= await page.title()
console.log("The title is "+Title)
await expect(page).toHaveTitle('Google');
})