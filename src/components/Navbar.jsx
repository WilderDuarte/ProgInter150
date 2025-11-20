function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="#">Mi Dashboard</a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav me-auto">

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">
              Gestión
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Usuarios</a></li>
              <li><a className="dropdown-item" href="#">Productos</a></li>
            </ul>
          </li>

        </ul>

        {/* Avatar usuario */}
        <div className="dropdown">
          <div
            className="rounded-circle bg-light d-flex justify-content-center align-items-center"
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
            data-bs-toggle="dropdown"
          >
            <span className="fw-bold">U</span>
          </div>

          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Perfil</a></li>
            <li><a className="dropdown-item" href="#">Configuración</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item text-danger" href="#">Cerrar sesión</a></li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
