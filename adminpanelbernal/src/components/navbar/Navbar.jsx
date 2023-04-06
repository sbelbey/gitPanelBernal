import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ListIcon from '@mui/icons-material/List';

import LogoBernal from "../../svgs/LogoBernal.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Buscar ..." name="" id="" />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item ">
            <NotificationsActiveIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListIcon className='icon' />
            Menu
          </div>
          <div className="item">
            <img src={LogoBernal} alt="avatar" className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar