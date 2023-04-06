import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';


const Widget = ({ type }) => {

  //temporary

  const amount = 100;
  const diff = 20;


  let data;

  switch (type) {
    case "user":
      data = {
        title: "Usuarios",
        isMoney: false,
        link: "Mostrar todos los usuarios",
        icon: <Person2OutlinedIcon className="icon" style={{
          color: '#bd0025',
          backgroundColor: 'rgba(189, 0, 38, 0.2)'
        }} />,
      };
      break;
    case "order":
      data = {
        title: "Pedidos",
        isMoney: false,
        link: "Mostrar todos los pedidos",
        icon: <ShoppingCartOutlinedIcon className="icon"
          style={{
            color: 'goldenrod',
            backgroundColor: 'rgba(218, 165, 32, 0.2)'
          }}
        />,
      };
      break;
    case "earning":
      data = {
        title: "Ganancias",
        isMoney: true,
        link: "Ver beneficios netos",
        icon: <MonetizationOnOutlinedIcon className="icon"
          style={{
            color: 'green',
            backgroundColor: 'rgba(0, 128, 0, 0.2)'
          }}
        />,
      };
      break;
    case "balance":
      data = {
        title: "Balance",
        isMoney: true,
        link: "Ver detalles",
        icon: <AccountBalanceWalletOutlinedIcon className="icon"
          style={{
            color: 'purple',
            backgroundColor: 'rgba(128, 0, 128, 0.2)'
          }}
        />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget