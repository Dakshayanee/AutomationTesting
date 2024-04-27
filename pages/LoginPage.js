exports.LoginPage=class LoginPage{
  
    //whenever u create object of that class the constructor will automatically invoke
    constructor(page){
        this.page=page;
        this.loginLink="#login"
        this.usernameInput='#loginusername';
        this.passwordInput='#loginpassword';
        this.loginButton='//button[normalize-space()="Log in"]';

    }

    async gotoLoginPage(){
        await this.page.goto('https://demoblaze.com/');
    }

    async login(username,password){
       await this.page.locator (this.loginLink).click();
       await this.page.locator(this.usernameInput).fill(username);
       await this.page.locator(this.passwordInput).fill(password);
       await this.page.locator(this.loginButton).click();
       
    }

     

}