const{test,expect}=require("@playwright/test")

test("Login test",async function({page}){
await page.goto("https://freelance-learn-automation.vercel.app/signup")
await  page.locator("#state").selectOption({label:"Goa"})
//await page.waitForTimeout(5000)
await  page.locator("#state").selectOption({value:"Gujarat"})
//await page.waitForTimeout(5000)
await  page.locator("#state").selectOption({index:4})
//await page.waitForTimeout(5000)
var a= await page.locator('#state').textContent();
await expect(a.includes('Kerala')).toBeTruthy();
//For loop

let state= await page.$("#state")
let stateValues= await state.$$("option");
let flag= false;
for(let i=0;i<stateValues.length;i++){
let IndItem= await stateValues[i].textContent()
console.log(IndItem)
if(IndItem.includes("Kerala")){
    flag=true;
    console.log(flag)

    break;
}

}

console.log(flag);
await expect (flag).toBeTruthy();


await page.locator('#hobbies').selectOption(["Playing","Swimming"]);
await page.waitForTimeout(5000)
})