function RegisterPage() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "420px" }}>
        <h3 className="text-center mb-3">Crear Cuenta</h3>

        <form>
          <div className="mb-3">
            <label className="form-label">Nombre completo</label>
            <input type="text" className="form-control" placeholder="Juan Pérez" />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" placeholder="ejemplo@gmail.com" />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" placeholder="********" />
          </div>

          <button className="btn btn-success w-100">Registrarme</button>
        </form>

        <div className="text-center mt-3">
          <a href="#">¿Ya tienes cuenta? Inicia sesión</a>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
