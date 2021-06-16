import BasePage from "./base.page";

export class LoginPage extends BasePage {
    
    get loginInput () {return element(by.type("RCTUITextField")).atIndex(0)}
    get passwordInput () {return element(by.type("RCTUITextField")).atIndex(1)}
    get loginBtn() {return element(by.label("Sign In")).atIndex(1)}

    userLoginsWithValidCredentials = async () => {
        await this.loginInput.replaceText("yanavi5140@botfed.com");
		await this.passwordInput.replaceText("Yanavi123");
        await this.loginBtn.tap()
    }
} 
export default new LoginPage();