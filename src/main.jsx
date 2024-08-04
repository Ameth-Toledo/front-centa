import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Page/Login/Login.jsx'
import Register from './components/Page/Register/Register.jsx'
import HomeEmpleado from './components/Page/Empleado/Home/HomeEmpleado.jsx'
import VerProductos from './components/Page/Empleado/VerProductos/VerProductos.jsx'
import VenderProductos from './components/Page/Empleado/VenderProductos/VenderProductos.jsx'
import VerProductosHome from './components/Page/VerProductosHome/VerProductosHome.jsx'
import Planes from './components/Page/Mensualidades/Planes/Planes.jsx'
import PlanesHome from './components/Page/Mensualidades/PlanesHome/PlanesHome.jsx'
import ClientesRegistrados from './components/Page/ClientesRegistrados/ClientesRegistrados.jsx'
import HomeAdministrador from './components/Page/Administrador/Home/Administrador.jsx'

const router=createBrowserRouter ([
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    },
    {
      path: '/home-empleado',
      element: <HomeEmpleado/>
    },
    {
      path: '/ver-productos',
      element: <VerProductos/>
    },
    {
      path: '/vender-productos',
      element: <VenderProductos/> 
    },
    {
      path: '/ver-productos-home',
      element: <VerProductosHome/>
    },
    {
      path: '/planes',
      element: <Planes/>
    },
    {
      path: '/planes-home',
      element: <PlanesHome/>
    },
    {
      path: '/clientes-registrados',
      element: <ClientesRegistrados/>
    },
    {
      path: '/home-administrador',
      element: <HomeAdministrador/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
