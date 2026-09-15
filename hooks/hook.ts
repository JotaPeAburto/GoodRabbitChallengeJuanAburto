import { Before, After, setWorldConstructor } from '@cucumber/cucumber';
import { WebDriver } from 'selenium-webdriver';
import { createDriver } from '../driver/DriverFactory';
import { BASE_URL } from '../src/config/config';

export class CustomWorld {
    driver!: WebDriver;
}

setWorldConstructor(CustomWorld);

Before(async function () {
    console.log('>>> EJECUTANDO BEFORE');

    this.driver = await createDriver();

    console.log('>>> DRIVER CREADO');

    await this.driver.get(BASE_URL);

    console.log('>>> PAGINA ABIERTA');
});

After(async function () {
    console.log('>>> EJECUTANDO AFTER');

    await this.driver.quit();
});