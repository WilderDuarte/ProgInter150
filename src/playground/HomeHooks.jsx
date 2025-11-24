import React from "react";

function HomeHooks() {
  return (
    <div className="container vh-100">
      <div className="text-center mb-4">
        <h2>Ejemplos de Hooks en React</h2>
      </div>

      <table className="table table-bordered table-striped text-center align-middle">
        <thead className="table-dark">
          <tr>
            <th>Hook</th>
            <th>Ruta</th>
            <th>Descripción</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>useState</strong></td>
            <td><a href="/usestate" className="btn btn-sm btn-primary">Ir a ejemplo</a></td>
            <td>Maneja el estado dentro de un componente funcional.</td>
            <td>Estado</td>
          </tr>
          <tr>
            <td><strong>useNavigate</strong></td>
            <td><a href="/usenavigate" className="btn btn-sm btn-primary">Ir a ejemplo</a></td>
            <td>Permite navegar entre rutas en React Router.</td>
            <td>Navegación</td>
          </tr>
          <tr>
            <td><strong>NuevoHook</strong></td>
            <td><a href="#" className="btn btn-sm btn-primary">Ir a ejemplo</a></td>
            <td>Descripción breve del hook.</td>
            <td>Categoría</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-start">
              <h6 className="fw-bold">Categorías y Hooks oficiales (React 19):</h6>
              <ul>
                <li><strong>Debug:</strong> useDebugValue</li>
                <li><strong>Estado:</strong> useState, useReducer</li>
                <li><strong>Referencias:</strong> useRef, useImperativeHandle</li>
                <li><strong>Performance:</strong> useMemo, useCallback, useTransition, useDeferredValue</li>
                <li><strong>Efectos / ciclo de vida:</strong> useEffect, useLayoutEffect, useInsertionEffect</li>
                <li><strong>Contexto y datos externos:</strong> useContext, useSyncExternalStore, useId</li>
                <li><strong>Nuevos en React 19:</strong> use, useOptimistic, useFormStatus, useActionState</li>
              </ul>
              <p className="small">
                <em>En React 19 existen ahora <strong>~19 hooks oficiales</strong>.  
                Además, puedes crear <strong>Custom Hooks</strong> combinando los existentes para encapsular lógica reutilizable.</em>
              </p>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default HomeHooks;