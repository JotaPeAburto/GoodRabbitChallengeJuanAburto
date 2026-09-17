import {Given, When,Status,Then } from "@cucumber/cucumber"
import {Hooks} from "../../../hooks/hook";

Given("Validar titulo {string} en seccion Trabajadores", async function (this: Hooks, titulo:string) {
    await this.trabajadoresPages.validarTituloSeccionTrabajadores(titulo);
});

Given("Validar pagina {string}", function () {

});
Given("Seleccionar boton {string} en seccion Trabajadores", function () {

});
Then("agregar nombre {string} en input", function () {

});
Then("agregar apellido {string} en input apellido", function () {

});
Given("agregar tipo de documento {string} en input tipo de documento", function () {

});
Given("agregar numero de documento {string} en input numero de documento", function () {

});
Given("agregar correo electronico {string} en input correo electronico", function () {

});
Given("agregar direccion {string} en input direccion", function () {

});
Given("agregar codigo del pais {string} en codigo del pais", function () {

});
Given("agregar telefono {string} en telefono", function () {

});
Given("agregar fecha de nacimiento {string} en fecha de nacimiento", function () {

});
Given("agregar regla de pago {string} en regla de pago", function () {

});
Given("agregar zona horaria {string} en zona horaria", function () {

});
Then("seleccionar boton {string} en Agregar Trabajador", function () {

});