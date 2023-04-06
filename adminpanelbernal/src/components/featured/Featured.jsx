import "./featured.scss"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";

import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Ingresos Totales</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Ventas totales de hoy</p>
        <p className="amount">$420</p>
        <p className="description">Procesamiento de transacciones anteriores. Es posible que no se incluyan los últimos pagos</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Objetivo</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Ultima Semana</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Último mes</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured