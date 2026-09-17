export interface ITrabajadores {
    validarTituloSeccionTrabajadores(titulo: string): Promise<void>;
    agregarNombreTrabajadores(nombre:string): Promise<void>;
    agregarApellidoTrabajadores(apellido:string): Promise<void>;
    agregarTipoDocumentoTrabajadores(tipoDocumento:string): Promise<void>;
    agregarNumeroDocumentoTrabajadores(numDocumento:string): Promise<void>;
    agregarCorreoTrabajadores(correo:string):Promise<void>;
    agregarDireccionTrabajadores(direccion:string):Promise<void>;
    agregarCodigoPaisTrabajadores(codigoPais:string):Promise<void>;
    agregarTelefonoTrabajadores(telefono:string):Promise<void>;
    agregarFechaNacimientoTrabajadores(fecha:string):Promise<void>;
    agregarReglaPagoTrabajadores(regla:string):Promise<void>;
    agregarZonaHorariaTrabajadores(zone:string):Promise<void>;
    seleccionarBtnAgregarTrabajadores(nombre:string):Promise<void>;

}