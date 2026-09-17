import {Given, When,Status } from "@cucumber/cucumber"
import {Hooks} from "../../../hooks/hook";


Given('Validar que estamos en el home {string}', async function (this: Hooks, link: string) {

    await this.loginPage.validarUbicacionHome(link);
});

    Given('Validar existencia de formulario con titulo {string}', async function (this: Hooks,titulo:string) {
    await this.loginPage.validarExistenciaFormularioHome(titulo)
    });

When('Ingresar valor {string} en input {string}',async function (this: Hooks, elemento: string,nombre:string) {
    if(nombre == "Nombre de usuario"){
        await this.loginPage.agregarValorUsuarioLogin(elemento,nombre)
    }
    else{
        await this.loginPage.agregarContrasenaLogin(elemento,nombre)
    }

});

When('Seleccionar boton {string}', async function (this: Hooks,boton:string) {
    await this.loginPage.seleccionarBotonLogin(boton);
});