const{test,expect}=require('@playwright/test');
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';

test('retry',async ({page}) => {
   
//login
const login=new LoginPage(page)
await login.gotoLoginPage();
await login.login('pavanol','test@123')
await page.waitForTimeout(3000);


//home
const home=new HomePage(page)
await home.addProductToCart('Nexus 6')
await page.waitForTimeout(3000);
await home.gotoCart();


//cart
})