Feature:  Proceso de inicio de sesion

Scenario: Revision inicio de sesion GoodRabbit
    Given Ingresar al home 'https://tk-gr.demo.goodrabbit.tech/signin'
    And Validar existencia de formulario
    And Validar titulo "Iniciar sesión"
    And Validar input con nombre "Nombre de usuario" con placeholder "Ingrese nombre de usuario"
    And Validar input con nombre "Contraseña" con placeholder "Ingrese contraseña"
    And Validar boton con label "Iniciar sesión" en estado "disabled"
    When Ingresar valor "admin" en input "Nombre de usuario"
    And Ingresar valor "contraseña" en input "Contraseña"
    And Validar boton con label "Iniciar sesión" en estado "enabled"
    And Seleccionar boton "Iniciar sesión"