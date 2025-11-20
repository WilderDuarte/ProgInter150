function ForgotPage() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "380px" }}>
        <h3 className="text-center mb-3">Recuperar Contraseña</h3>

        <p className="text-muted text-center">
          Ingresa tu correo y te enviaremos un enlace para recuperar tu contraseña.
        </p>

        <form>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" placeholder="ejemplo@gmail.com" />
          </div>

          <button className="btn btn-warning w-100">Enviar enlace</button>
        </form>

        <div className="text-center mt-3">
          <a href="#">Volver al login</a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPage;
