function LoginPage() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "380px" }}>
        <h3 className="text-center mb-3">Iniciar Sesión</h3>

        <form>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" placeholder="ejemplo@gmail.com" />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" placeholder="********" />
          </div>

          <button className="btn btn-primary w-100">Ingresar</button>
        </form>

        <div className="text-center mt-3">
          <a href="#">¿Olvidaste tu contraseña?</a> <br />
          <a href="#">Crear una cuenta</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
