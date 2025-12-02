import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Firebase
import { auth, db } from "../../firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Login con correo y contraseña
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = form;

    if (!email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor ingresa tu correo y contraseña.",
      });
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
      localStorage.setItem("token", token);

      Swal.fire({
        icon: "success",
        title: "Bienvenido",
        text: "Inicio de sesión exitoso.",
        showConfirmButton: false,
        timer: 2000,
      });

      navigate("/dashboard");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión",
        text: "Correo o contraseña incorrectos.",
      });
    }
  };

  // Login con Google
  const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // 1. Buscar si el usuario existe en Firestore
    const userRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userRef);

    console.log(userDoc);

    if (!userDoc.exists()) {
      // 2. Si NO existe → cerrar sesión y mostrar mensaje
      await auth.signOut();

      Swal.fire({
        icon: "error",
        title: "Acceso no autorizado",
        text: "Tu cuenta de Google no está registrada en el sistema.",
      });

      return;
    }

    // 3. Si existe → permitir login
    Swal.fire({
      icon: "success",
      title: "Bienvenido",
      text: `Hola ${user.displayName}`,
      showConfirmButton: false,
      timer: 2000,
    });

    navigate("/dashboard");
  } catch (error) {
    console.error(error);
    Swal.fire({
      icon: "error",
      title: "Error de Google Sign-In",
      text: error.message,
    });
  }
};

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "380px" }}>
        <h3 className="text-center mb-3">Iniciar Sesión</h3>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              placeholder="ejemplo@gmail.com"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-control"
                value={form.password}
                onChange={handleChange}
                placeholder="****"
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}
                  style={{ fontSize: "1.2rem" }}
                ></i>
              </button>
            </div>
          </div>

          <button className="btn btn-primary w-100">Ingresar</button>
        </form>
        

        {/* Sección de enlaces y Google Sign-In */}
<div className="text-center mt-3 d-flex flex-column gap-2">
  {/* Link a recuperar contraseña */}
  <Link to="/forgot" className="text-decoration-none">
    ¿Olvidaste tu contraseña?
  </Link>

  {/* Link a crear cuenta */}
  <Link to="/register" className="text-decoration-none">
    Crear una cuenta
  </Link>

  {/* Botón de Google */}
  <button
    className="btn btn-outline-danger mt-2"
    onClick={handleGoogleSignIn} // Función que maneja login con Google
  >
    <i className="bi bi-google me-2"></i> Iniciar sesión con Google
  </button>
</div>

      </div>
    </div>
  );
}

export default LoginPage;