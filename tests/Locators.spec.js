// const {test,expect} =require('@playwright/test');
import {test,expect} from '@playwright/test';


test('Locators' , async ({page}) => {
  
   await page.goto('https://demoblaze.com/');

   //click on login button
    //await page.locator('id=login2').click()
    await page.click('id=login2');

      //provide username  in login ==  using css method
      // await page.fill('#loginusername','pavanol');
       //pavanol indicates value 
       await page.type('#loginusername','pavanol');

      //provide password tag with id using css
      await page.fill("input[id = 'loginpassword']",'test@123');

      //click on login button --->Xpath
      await page.click("//button[normalize-space()='Log in']")


      //verify logout link prsence on the webpage--first you need capture that element
      const logoutLink=await page.locator("//a[normalize-space()='Log out']")
      await expect(logoutLink).toBeVisible();

      await page.close();
})