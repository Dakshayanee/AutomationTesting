import {test ,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test('test' ,async ({page}) =>{

    //login
     const login=new LoginPage(page);
     await login.gotoLoginPage();
     await login.login('pavanol','test@123')
     await page.waitForTimeout(3000)

    //Home
      const home=new HomePage(page);
      await home.addProductToCart("Nexus 6")
      await page.waitForTimeout(3000)
      await home.gotoCart();

    //Cart
})