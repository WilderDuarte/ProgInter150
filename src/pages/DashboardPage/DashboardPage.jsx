import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (!u) navigate("/");
      setUser(u);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "Tu sesión se cerrará y volverás al inicio.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, cerrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await signOut(auth);
        navigate("/");
      }
    });
  };

  // Obtener nombre elegante
  const getDisplayName = () => {
    if (user?.displayName) return user.displayName;
    if (user?.email) return user.email.split("@")[0];
    return "Usuario";
  };

  return (
    <div className="d-flex" style={{ height: "100vh", overflow: "hidden" }}>
      
      {/* SIDEBAR */}
      <div
        className="bg-light border-end"
        style={{
          width: "250px",
          padding: "25px 20px",
        }}
      >
        <h4 className="text-center mb-4">MENÚ</h4>

        <ul className="list-unstyled text-center">
          <li className="mb-3">
            <a href="#" className="text-decoration-none fw-semibold">Inicio</a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-decoration-none fw-semibold">Reportes</a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-decoration-none fw-semibold">Configuración</a>
          </li>
        </ul>
      </div>

      {/* CONTENIDO */}
      <div className="flex-grow-1 d-flex flex-column">

        {/* NAVBAR SUPERIOR */}
        <div
          className="px-4 py-3 d-flex justify-content-between align-items-center"
          style={{
            background: "#1E1E1E",
            color: "white",
          }}
        >
          <h5 className="m-0">Mi Dashboard</h5>

          {/* Usuario + Logout */}
          <div className="d-flex align-items-center gap-3">
            
            {/* FOTO DE PERFIL */}
            <img
              src={
                user?.photoURL ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="avatar"
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #ffffff55",
              }}
            />

            <button className="btn btn-danger btn-sm" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </div>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div
          className="flex-grow-1 p-5"
          style={{ overflowY: "auto" }}
        >
          <h1 className="fw-bold text-center">
            Bienvenido al Dashboard 👋
          </h1>

          <p className="fs-5 text-center">
            Hola <strong>{getDisplayName()}</strong>
            <br />
            <span className="text-muted">{user?.email}</span>
          </p>

          <hr style={{ maxWidth: "700px", margin: "20px auto" }} />

          <p className="text-center mt-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Este es el contenido principal. Aquí puedes agregar widgets, reportes, gráficas,
            módulos, estadísticas o cualquier sección que necesite tu sistema.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
