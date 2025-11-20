function ResetPage() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "380px" }}>
        <h3 className="text-center mb-3">Restablecer Contraseña</h3>

        <form>
          <div className="mb-3">
            <label className="form-label">Nueva contraseña</label>
            <input type="password" className="form-control" placeholder="********" />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirmar contraseña</label>
            <input type="password" className="form-control" placeholder="********" />
          </div>

          <button className="btn btn-primary w-100">Restablecer</button>
        </form>

        <div className="text-center mt-3">
          <a href="#">Volver al login</a>
        </div>
      </div>
    </div>
  );
}

export default ResetPage;
