import {ITrabajadores} from "./ITrabajadores";
import {By, WebDriver} from "selenium-webdriver";
import {Utils} from "../../Utils/Utils";

export class Trabajadores implements ITrabajadores {

    private utils: Utils;

    constructor(private driver: WebDriver,
                private tomarScreenshot: (nombre: string) => Promise<void>)
    {
        this.utils = new Utils(this.driver);
    }

    readonly tituloTrabajadores = By.xpath(
        '//h1[text()="Trabajadores"]'
    );


    async validarTituloSeccionTrabajadores(titulo: string): Promise<void> {
        await this.utils.esperarCargaPaginaSinElemento();
        await this.utils.esperarElemento(this.tituloTrabajadores)
        const tituloTrabajadores = await this.driver.findElement(this.tituloTrabajadores);

        this.utils.enmarcar(tituloTrabajadores)
        if((await tituloTrabajadores.getText()).toString() == titulo){

            await this.tomarScreenshot("LoginFeature-LoginFeature-Validar titulo Trabajadores-PASSED");
            await this.utils.esperaSegundos(2);
        }
        else{
            await this.tomarScreenshot("LoginFeature-Validar titulo Trabajadores- FAILED");
            await this.utils.esperaSegundos(2);
        }
    }

    agregarNombreTrabajadores(nombre: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    agregarApellidoTrabajadores(apellido: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    agregarCodigoPaisTrabajadores(codigoPais: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    agregarCorreoTrabajadores(correo: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    agregarDireccionTrabajadores(direccion: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    agregarFechaNacimientoTrabajadores(fecha: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    agregarNumeroDocumentoTrabajadores(numDocumento: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    agregarReglaPagoTrabajadores(regla: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    agregarTelefonoTrabajadores(telefono: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    agregarTipoDocumentoTrabajadores(tipoDocumento: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    agregarZonaHorariaTrabajadores(zone: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    seleccionarBtnAgregarTrabajadores(nombre: string): Promise<void> {
        return Promise.resolve(undefined);
    }







}