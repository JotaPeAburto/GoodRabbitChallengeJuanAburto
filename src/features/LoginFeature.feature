Feature:  Proceso de inicio de sesion


Scenario: Revision inicio de sesion GoodRabbit
    Given Validar que estamos en el home 'https://tk-gr.demo.goodrabbit.tech/signin'
    And Validar existencia de formulario con titulo "Iniciar sesión"
    When Ingresar valor "admin" en input "Nombre de usuario"
    And Ingresar valor "contraseña" en input "Contraseña"
    Then Seleccionar boton "Iniciar sesión"
    And Validar titulo "TRABAJADORES" en seccion Trabajadores
