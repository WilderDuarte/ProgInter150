function Sidebar() {
  return (
    <div
      className="bg-light border-end p-3"
      style={{ width: "220px", height: "calc(100vh - 56px)" }}
    >
      <h6 className="text-uppercase">Menú</h6>

      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Reportes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Configuración</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
