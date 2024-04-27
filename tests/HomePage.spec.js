// test-for writing test
// expect-add validation for test
const { test,expect } = require('@playwright/test');

// to write test we need test blog in which we have to pass title,anonyms fuction
test('Home page',async ({page}) => {

  await page.goto('https://demoblaze.com/');

  const pageTitle= await page.title();
  console.log('page title is ', pageTitle);

  //to validate
   await expect(page).toHaveTitle('STORE');

   const pageUrl=page.url();
   console.log('page url is',pageUrl);

   //to validate url
   await expect(page).toHaveURL('https://demoblaze.com/');

    await  page.close();

})

