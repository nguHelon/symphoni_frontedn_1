import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const Home = () => {
  return (
    <div className="w-[1100px] h-[75%] bg-white flex justify-between items-center rounded-[28px] p-5">
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Home