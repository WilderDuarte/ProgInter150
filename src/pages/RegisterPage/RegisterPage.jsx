// ✔ Estados (useState)
// ✔ Objetos en JS
// ✔ Eventos onChange, onSubmit
// ✔ Validación básica con if
// ✔ Mostrar/ocultar contraseña (DOM dinámico)
// ✔ Render condicional (error && …)
// ✔ Evaluación de fortaleza de contraseña
// ✔ Deshabilitar botón según condiciones
// ✔ Limpiar formulario

// En este ejercicio los estudiantes aprenderán a convertir un formulario estático en una vista completamente interactiva utilizando JavaScript aplicado dentro de React.
// Se trabajan los conceptos fundamentales para crear aplicaciones reales:

// Estados con useState para almacenar los valores del formulario.

// Objetos en JavaScript para agrupar los datos ingresados por el usuario.

// Eventos onChange y onSubmit para reaccionar a lo que escribe el usuario y al envío del formulario.

// Validaciones básicas con if, incluyendo campos obligatorios y longitud mínima.

// Comparación de contraseñas y manejo de errores dinámicos.

// Mostrar/Ocultar contraseña modificando el tipo del input de forma interactiva.

// Fortaleza de la contraseña con cambios visuales según el texto ingresado.

// Render condicional para mostrar mensajes solo cuando son necesarios.

// Deshabilitar el botón hasta que el formulario esté correctamente completado.

// Limpieza del formulario una vez finaliza el proceso.

// Este ejercicio introduce a los aprendices a la base de la manipulación del estado, manejo de eventos, validación y retroalimentación visual en React, preparando el camino para formularios conectados a bases de datos y backend más adelante.

import { useState } from "react";

function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, repeatPassword } = form;

    // Validaciones
    if (!name || !email || !password || !repeatPassword) {
      setError("Todos los campos son obligatorios.");
      setSuccess("");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      setSuccess("");
      return;
    }

    if (password !== repeatPassword) {
      setError("Las contraseñas no coinciden.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Usuario registrado correctamente.");

    console.log("Datos del usuario:", form);

    setForm({
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    });
  };

  const passwordStrength = () => {
    const len = form.password.length;
    if (!len) return "";
    if (len < 4) return "Débil";
    if (len < 8) return "Media";
    return "Fuerte";
  };

  const strengthColor = () => {
    const len = form.password.length;
    if (!len) return "";
    if (len < 4) return "text-danger";
    if (len < 8) return "text-warning";
    return "text-success";
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Crear Cuenta</h2>

      {/* Mensajes */}
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit}>
        {/* Nombre */}
        <div className="mb-3">
          <label className="form-label">Nombre Completo</label>
          <input
            name="name"
            type="text"
            className="form-control"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            name="email"
            type="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {/* Contraseña */}
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <div className="input-group">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              className="form-control"
              value={form.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>

          {form.password && (
            <small className={strengthColor()}>
              Fortaleza: {passwordStrength()}
            </small>
          )}
        </div>

        {/* Repetir contraseña */}
        <div className="mb-3">
          <label className="form-label">Repetir Contraseña</label>
          <input
            name="repeatPassword"
            type="password"
            className="form-control"
            value={form.repeatPassword}
            onChange={handleChange}
          />

          {form.repeatPassword &&
            form.password !== form.repeatPassword && (
              <small className="text-danger">
                Las contraseñas no coinciden.
              </small>
            )}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={
            !form.name ||
            !form.email ||
            !form.password ||
            !form.repeatPassword
          }
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
