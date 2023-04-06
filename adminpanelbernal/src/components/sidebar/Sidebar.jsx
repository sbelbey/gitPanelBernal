import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person3Icon from '@mui/icons-material/Person3';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import { Link, Navigate } from 'react-router-dom';
// import LogoBernalCompleto from '../../svgs/LogoBernalCompleto.svg';

const Sidebar = () => {
  const logout = () => {
    window.localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>BERNAL</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">PRINCIPAL</p>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li><DashboardIcon className="icon" /><span>Dashboard</span></li>
          </Link>
          <p className="title">LISTAS</p>
          <Link to='/usuarios' style={{ textDecoration: 'none' }}>
            <li><Person3Icon className="icon" /><span>Usuarios</span></li>
          </Link>
          <Link to='/productos' style={{ textDecoration: 'none' }}>
            <li><BatteryChargingFullIcon className="icon" /><span>Productos</span></li>
          </Link>
          <Link to='/vehiculos' style={{ textDecoration: 'none' }}>
            <li><ElectricCarIcon className="icon" /><span>Vehículos</span></li>
          </Link>
          <li><ShoppingCartCheckoutOutlinedIcon className="icon" /><span>Pedidos</span></li>
          <p className="title">USABILIDAD</p>
          <li><AssessmentIcon className="icon" /><span>Estadísticas</span></li>
          <li><NotificationsActiveIcon className="icon" /><span>Notificaciones</span></li>
          <p className="title">USUARIO</p>
          <li><AccountCircleIcon className="icon" /><span>Perfil</span></li>
          <li><LogoutIcon className="icon" /><span onClick={logout}>Cerrar Sesión</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar