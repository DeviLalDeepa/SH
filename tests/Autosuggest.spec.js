import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox').fill('Devi');
  await page.waitForSelector("//li[@role='presentation']")
    await page.waitForTimeout(5000);

    let ArryEle= await page.$$("li[role='presentation']")

    let aa= ArryEle.length;
    console.log(aa)
let i;
    for(i=0;i<aa;i++)
{
var Tt= await ArryEle[i].innerText();
console.log(Tt)
console.log("Value of i :" +i)

if(await Tt.includes('Karumari'))
  {  await console.log("Karumari");
    
    await ArryEle[i].click();


await page.waitForTimeout(50000);
break;
  }
}
});