import LoginPage from "../pages/login.page";
import StartPage from "../pages/start.page";
    
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({newInstance: true, permissions: {notifications: 'YES'}});
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Search', async () => {
    await StartPage.signInBtn.tap()
    await LoginPage.userLoginsWithValidCredentials();
	
		// await element(by.id("DrivePlus")).tap();
		// await element(by.label("CreateCloseButton")).atIndex(1).tap();
		// await element(by.type("RNGestureHandlerButton")).atIndex(0).tap();
		// await element(by.type("RNGestureHandlerButton")).atIndex(0).tap();
		// await element(by.text("Cancel")).tap();
	})

  afterAll(async () => {
    await device.terminateApp();
  });
});