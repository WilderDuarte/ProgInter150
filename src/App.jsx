import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ResetPage from './pages/ResetPage/ResetPage';
import ForgotPage from './pages/ForgotPage/ForgotPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ProtectedRoute from './components/ProtectedRoutes';

// ###### RUTAS PARA PRACTICAR HOOKS
import HomeHooks from './playground/HomeHooks'
import HookUseState from './playground/HookUseState'
// import HookUseNavigate from './playground/HookUseNavigate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/dashboard" element={<ProtectedRoute> <DashboardPage /> </ProtectedRoute>} />

        {/* Rutas de Playground para Hooks */}
        <Route path="/hooks" element={<HomeHooks/>} />
        <Route path="/usestate" element={<HookUseState/>} />
        {/* <Route path="/usenavigate" element={<HookUseNavigate/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
