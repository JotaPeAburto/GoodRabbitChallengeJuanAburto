export interface ILogin {
    validarUbicacionHome(link:string): Promise<void>;
    validarExistenciaFormularioHome(titulo:string): Promise<void>;
    agregarValorUsuarioLogin(usuario:string,nombre:string): Promise<void>;
    agregarContrasenaLogin(contrasena:string,nombre:string): Promise<void>;
    seleccionarBotonLogin(boton:string): Promise<void>;
}