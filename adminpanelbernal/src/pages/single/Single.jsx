import "./single.scss"

import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">
              Editar
            </div>
            <h1 className="title">Información</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Telefono: </span>
                  <span className="itemValue">(362) 123-2132</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Dirección: </span>
                  <span className="itemValue">Av. Siempre viva 234 Springfield</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Provincia: </span>
                  <span className="itemValue">Corrientes</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Compras del Usuario (Últimos 6 meses)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Últimas transacciones</h1>
          <List />
        </div>
      </div>

    </div>
  )
}

export default Single