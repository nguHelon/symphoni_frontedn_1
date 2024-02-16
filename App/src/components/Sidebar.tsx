import { NavLink } from "react-router-dom"
import { bgSidebarDesktop } from "../assets/assets"
import { links } from "../constants/constants"

const Sidebar = () => {

  return (
    <div style={{backgroundImage: `url(${bgSidebarDesktop})`}} className="bg-cover bg-center flex-none w-[300px] h-[100%] rounded-lg p-5">
        <div className="flex flex-col space-y-5">
            {
                links.map((link, i) => (
                    <div 
                        key={i}
                        className="flex items-center w-full space-x-5"
                    >
                        <NavLink 
                            to={link.to}
                            className={({isActive}) => `h-[35px] w-[35px] flex justify-center items-center rounded-full border border-LightGray text-LightGray font-bold ${isActive ? "bg-LightBlue text-black" : ""}`}
                        >
                            {i + 1}
                        </NavLink>
                        <NavLink 
                            to={link.to}                         
                        >                        
                            <div>
                                <span className="text-xs text-CoolGray">{link.name}</span>
                                <h2 className="text-sm font-semibold text-LightGray">{link.description}</h2>
                            </div>
                        </NavLink>
                    </div>
                    
                ))
            }
        </div>
    </div>
  )
}

export default Sidebar