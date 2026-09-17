import { Before, After, setWorldConstructor, IWorld,setDefaultTimeout } from '@cucumber/cucumber';
import { WebDriver } from 'selenium-webdriver';
import * as fs from 'fs';
import * as path from 'path';

import { createDriver } from '../driver/DriverFactory';
import { BASE_URL } from '../src/config/config';
import { ILogin } from "../src/pages/LoginPage/ILogin";
import { Login } from "../src/pages/LoginPage/Login";
import {Utils} from "../src/Utils/Utils";
import {ITrabajadores} from "../src/pages/TrabajadoresPage/ITrabajadores";
import {Trabajadores} from "../src/pages/TrabajadoresPage/Trabajadores";

setDefaultTimeout(20000);
export class Hooks {
    driver!: WebDriver;
    loginPage!: ILogin;
    trabajadoresPages!: ITrabajadores
    caso!: string;

    async tomarScreenshot(
        nombre: string
    ): Promise<string> {

        const screenshotsDir = path.join(
            process.cwd(),
            'reports',
            'screenshots',
            this.caso
        );

        if (!fs.existsSync(screenshotsDir)) {
            fs.mkdirSync(screenshotsDir, { recursive: true });
        }

        const safeName = nombre
            .replace(/[<>:"/\\|?*]/g, '_')
            .trim();

        const screenshot = await this.driver.takeScreenshot();

        const filePath = path.join(
            screenshotsDir,
            `${safeName}.png`
        );

        fs.writeFileSync(
            filePath,
            screenshot,
            'base64'
        );

        console.log(`>>> SCREENSHOT: ${filePath}`);

        return filePath;
    }
}

setWorldConstructor(Hooks);
Before(async function (scenario) {

    this.caso = scenario.pickle.name;

    this.driver = await createDriver();
    console.log('>>> DRIVER CREADO');

    await this.driver.get(BASE_URL);
    console.log('>>> NAVEGÓ AL HOME');

    this.loginPage = new Login(
        this.driver,
        this.tomarScreenshot.bind(this)
    );

    this.trabajadoresPages = new Trabajadores(
        this.driver,
        this.tomarScreenshot.bind(this)
    );

    this.utils = new Utils(this.driver);
    console.log('>>> LOGIN PAGE CREADO');


});

After(async function () {
    console.log('>>> EJECUTANDO AFTER');

    await this.driver.quit();

    console.log('>>> DRIVER CERRADO');
});

