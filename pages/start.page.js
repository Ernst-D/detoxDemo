import BasePage from "./base.page";

export class StartPage extends BasePage {

    get signInBtn(){return element(by.label("Sign In"))} 

    clickSignInBtn = () => {this.signInBtn.tap()}
    isOnStartPage = () => {this.signInBtn.atIndex(0)}
} 
export default new StartPage();

