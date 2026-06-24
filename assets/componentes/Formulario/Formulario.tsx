const Formulario = () => {
    return (
        <div className="formulario__container">
        <img src="/assets/images/logo.png" alt="Logo" className="formulario__logo" />
        <form className="formulario">
            <div className="formulario__container">
                <input className="formulario__input" type="usuario" id="usuario" name="usuario" />
                <input className="formulario__input" type="password" id="contrasena" name="contrasena" />     
                <button className="formulario__button" type="submit">Ingresar</button>
                
            </div>
        </form>
        <button className="formulario__button" type="submit">¿Olvidaste la clave?</button>
        <button className="formulario__button" type="submit">Crear cuenta</button>
        </div>
    )
}