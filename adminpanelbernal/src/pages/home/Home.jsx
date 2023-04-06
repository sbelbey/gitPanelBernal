import "./home.scss"

import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Últimos 6 meses (Ingresos)" aspect={2 / 1}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Últimas transacciones
          </div>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Home