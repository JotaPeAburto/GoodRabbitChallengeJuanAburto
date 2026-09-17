Feature:  Proceso de Validacion Seccion Trabajadores

  Background:
    Given Validar que estamos en el home 'https://tk-gr.demo.goodrabbit.tech/signin'
    And Validar existencia de formulario con titulo "Iniciar sesión"
    When Ingresar valor "admin" en input "Nombre de usuario"
    And Ingresar valor "contraseña" en input "Contraseña"
    Then Seleccionar boton "Iniciar sesión"
    And Validar titulo "TRABAJADORES" en seccion Trabajadores


  Scenario: Revision Elementos Seccion Trabajadores
    Given Validar pagina 'https://tk-gr.demo.goodrabbit.tech/timekeeper?module=timekeeper&view=workers'
    When Validar titulo "TRABAJADORES" en seccion Trabajadores
    And Validar filtro Periodo en la tabla Trabajadores
    And Validar filtro Etiquetas en la tabla Trabajadores
    And Validar Boton Buscar en la tabla Trabajadores
    And Validar Boton Refrescar en la tabla Trabajadores
    And Validar tabla con elementos de los trabajadores
    Then Validar boton "Agregar Trabajador +" en seccion Trabajadores


  Scenario Outline: Agregar un trabajador en seccion Trabajadores
    Given Seleccionar boton "Agregar Trabajador +" en seccion Trabajadores
    When agregar nombre "<nombre>" en input
    And agregar apellido "<apellido>" en input apellido
    And agregar tipo de documento "<tipo de documento>" en input tipo de documento
    And agregar numero de documento "<numero de documento>" en input numero de documento
    And agregar correo electronico "<correo electronico>" en input correo electronico
    And agregar direccion "<direccion>" en input direccion
    And agregar codigo del pais "<codigo de pais>" en codigo del pais
    And agregar telefono "<telefono>" en telefono
    And agregar fecha de nacimiento "<fecha de nacimiento>" en fecha de nacimiento
    And agregar regla de pago "<regla de pago>" en regla de pago
    And agregar zona horaria "<zona horaria>" en zona horaria
    And seleccionar boton "Agregar" en Agregar Trabajador


    Examples:
      | nombre | apellido | tipo de documento | numero de documento | correo electronico | direccion | codigo de pais | telefono | fecha de nacimiento | regla de pago | zona horaria |
      | john   | paul     |                   |                     |                    |           |                |          |                     |               |              |
