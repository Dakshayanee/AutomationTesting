const {test,expect} = require('@playwright/test');

test('Locating Multiple Elements', async ({page}) => {
    
   await page.goto('https://demoblaze.com/')

   //locate all the links on the page 
//    const links= await page.$$('a');

//    for( const link of links){
//        const linkText=await link.textContent();
//        console.log(linkText);
//    }

 //want product names on the web page
 const products= await page.$$("//div[@id='tbodyid']//div//h4/a");
   
 for( const product of products){
   const productName= await product.textContent();
   console.log(productName);
 }

   
})