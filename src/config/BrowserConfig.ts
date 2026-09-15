export enum Browser {
    CHROME = 'chrome',
    FIREFOX = 'firefox',
    EDGE = 'edge'
}

export interface BrowserConfig {
    browser: Browser;
    headless: boolean;
}