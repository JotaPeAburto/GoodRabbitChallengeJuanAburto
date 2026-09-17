import {By, until, WebDriver, WebElement} from "selenium-webdriver";

export class Utils{

    constructor(private driver: WebDriver) {

    }

    async enmarcar(elemento:WebElement): Promise<void> {
        await this.driver.executeScript(
            "arguments[0].style.border='3px solid red';",
            elemento
        );
}

    async desmarcar(elemento: WebElement): Promise<void> {
        await this.driver.executeScript(
            "arguments[0].style.border='';",
            elemento
        );
    }

    async esperarElemento(elemento: By): Promise<void> {
        await this.driver.wait(
            until.elementLocated(elemento),
            10000
        );
    }

    async esperaSegundos(segundos: number): Promise<void> {
        await new Promise(resolve =>
            setTimeout(resolve, segundos * 1000)
        );
    }

    async esperarCargaPaginaSinElemento(): Promise<void> {
        await this.driver.wait(
            async () => {
                const estado = await this.driver.executeScript(
                    'return document.readyState'
                );

                return estado === 'complete';
            },
            10000
        );
    }



}

