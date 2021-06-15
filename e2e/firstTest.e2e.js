import StartPage from "../pages/start.page";
    
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({newInstance: true, permissions: {notifications: 'YES'}});
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('MyRecordedTest', async () => {
    await StartPage.signInBtn.tap()
		// await element(by.label("Sign In")).atIndex(0).tap();
		await element(by.type("RCTUITextField")).atIndex(0).replaceText("yanavi5140@botfed.com");
		await element(by.type("RCTUITextField")).atIndex(1).replaceText("Yanavi123");
		await element(by.label("Sign In")).atIndex(1).tap();
		await element(by.id("DrivePlus")).tap();
		await element(by.label("CreateCloseButton")).atIndex(1).tap();
		await element(by.type("RNGestureHandlerButton")).atIndex(0).tap();
		await element(by.type("RNGestureHandlerButton")).atIndex(0).tap();
		await element(by.text("Cancel")).tap();
	})

  afterAll(async () => {
    await device.terminateApp();
  });
});