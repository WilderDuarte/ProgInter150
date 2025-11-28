import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import Swal from "sweetalert2";

function ProtectedRoute({ children }) {
  const user = auth.currentUser;

  // Si NO está logueado, mostrar alerta y redirigir
  if (!user) {
    Swal.fire({
      icon: "error",
      title: "Acceso denegado",
      text: "No tienes permisos para realizar esta acción. Por favor inicia sesión.",
      confirmButtonText: "Entendido",
    });

    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
