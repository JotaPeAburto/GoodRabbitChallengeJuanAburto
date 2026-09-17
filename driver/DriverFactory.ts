import { Builder, WebDriver } from 'selenium-webdriver';
import chrome = require("selenium-webdriver/chrome");

export async function createDriver(): Promise<WebDriver> {
    const options = new chrome.Options();

    options.addArguments('--start-fullscreen');

    return await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
}