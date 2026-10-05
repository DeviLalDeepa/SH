const{test,expect}=require("@playwright/test")

test("File upload",async function({page}){

    
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator('#file-upload').setInputFiles("/Users/Madhavan/Desktop/Devi/Locators.txt")
    await page.locator('#file-submit').click()
    const visibleflag= await page.getByRole('heading', { name: 'File Uploaded!' }).isVisible()
    await expect(visibleflag).toBeTruthy()

})