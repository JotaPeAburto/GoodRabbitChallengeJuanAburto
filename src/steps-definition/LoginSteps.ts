import {Given, When} from "@cucumber/cucumber"

Given('Ingresar al home {string}', function (link:string) {
    // Write code here that turns the phrase above into concrete actions
    console.log(link)
    return link
});

    Given('Validar existencia de formulario', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'ok';
    });

    Given('Validar titulo {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'ok';
    });

    Given('Validar input con nombre {string} con placeholder {string}', function (string, string2) {
        // Write code here that turns the phrase above into concrete actions
        return 'ok';
    });


    Given('Validar boton con label {string} en estado {string}', function (string, string2) {
        // Write code here that turns the phrase above into concrete actions
        return 'ok';
    });

    When('Ingresar valor {string} en input {string}', function (string, string2) {
        // Write code here that turns the phrase above into concrete actions
        return 'ok';
    });

    When('Seleccionar boton {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'ok';
    });