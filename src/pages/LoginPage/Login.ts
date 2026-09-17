import {ILogin} from "./ILogin";
import {By, WebDriver, WebElement} from "selenium-webdriver";

import {Utils} from "../../Utils/Utils";


export class Login implements ILogin {


    private utils: Utils;
    constructor(private driver: WebDriver,
                private tomarScreenshot: (nombre: string) => Promise<void>,) {

        this.utils = new Utils(this.driver);
    }

    readonly btnIniciarSesionLogin = By.xpath(
        '//button[span/span[text()="Iniciar sesión"]]'
    );

    readonly formularioLogin = By.xpath(
        '//form[div/h1[text()="Iniciar sesión"]]/div/h1'
    );

    readonly usuarioLogin = By.xpath(
        '//label[text()="Nombre de usuario"]/../div/input[@placeholder="Ingrese nombre de usuario"]'
    );

    async validarUbicacionHome(link:string): Promise<void> {
        await this.utils.esperarElemento(this.formularioLogin);
        const linkActual:string =  await this.driver.getCurrentUrl();

        if(linkActual == link){
            await this.tomarScreenshot("LoginFeature-Validar que estamos en el home- PASSED");
        }
        else{
            await this.tomarScreenshot("LoginFeature-Validar que estamos en el home- FAILED");
        }
    }

    async validarExistenciaFormularioHome(titulo:string): Promise<void> {

        const formulario = await this.driver.findElement(this.formularioLogin).getText();

        if(formulario == titulo){

            await this.tomarScreenshot("LoginFeature-Validar existencia de formulario-PASSED ");
            await this.utils.esperaSegundos(2);
        }
        else{
            await this.tomarScreenshot("LoginFeature-Validar existencia de formulario- FAILED");
            await this.utils.esperaSegundos(2);
        }


    }

    async agregarValorUsuarioLogin(usuario: string,nombre:string): Promise<void> {
        let input:WebElement = await this.driver.findElement(By.xpath('//label[text()="'+nombre+'"]/../div/input[@placeholder="Ingrese nombre de usuario"]'));

       input.click();
       this.utils.enmarcar(input)
       input.clear();
       input.sendKeys(usuario);
        await this.utils.esperaSegundos(2)
        await this.tomarScreenshot("LoginFeature-Agregar usuario- PASSED");
        this.utils.desmarcar(input)

    }

    async agregarContrasenaLogin(contrasena: string,nombre:string): Promise<void> {
        let input:WebElement = await this.driver.findElement(By.xpath('//label[text()="'+nombre+'"]/../div/input[@placeholder="Ingrese contraseña"]'));

        await input.click();
        this.utils.enmarcar(input)
        input.clear();
        input.sendKeys(contrasena);
        await this.utils.esperaSegundos(2)
        await this.tomarScreenshot("LoginFeature-Agregar contraseña- PASSED");
        this.utils.desmarcar(input)
    }

    async seleccionarBotonLogin(botonLogin:string): Promise<void> {
        let btn:WebElement = await this.driver.findElement(By.xpath("//button[span/span[text()='"+botonLogin+"']]"));

        this.utils.enmarcar(btn)
        await this.tomarScreenshot("LoginFeature-Seleccionar botón Login- PASSED");
        await btn.click();
        await this.utils.esperaSegundos(10);

    }
}