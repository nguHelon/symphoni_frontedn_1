import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const Home = () => {
  return (
    <div className="w-[1100px] h-[90%] bg-transparent space-y-2 ss:bg-white flex flex-col justify-normal ss:justify-between items-start rounded-[28px] p-5 ss:flex-row">
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Home