import BasePage from "./base.page";

export class StartPage extends BasePage {

    get signInBtn(){return element(by.label("Sign In"))} 
} 
export default new StartPage();

