import { NavLink } from "react-router-dom"
import { bgSidebarDesktop } from "../assets/assets"
import { links } from "../constants/constants"
import useFormStore from "../store/appStore"

const Sidebar = () => {
  const { emptyAddOnsState } = useFormStore()

  const emptyAddOnData = (link: {
    name: string,
    description: string,
    to: string
}): void => {
    if (link.description == "ADD-ONS") {
        emptyAddOnsState()
    }
    return
  }

  return (
    <div style={{backgroundImage: `url(${bgSidebarDesktop})`}} className={`bg-cover bg-center flex-none w-full ss:w-[32%] ss:h-full rounded-[18px] p-5 bg-[url("${bgSidebarDesktop}")]`}>
        <div className="flex flex-row justify-center ss:justify-normal space-x-5 ss:space-x-0 ss:flex-col ss:space-y-5">
            {
                links.map((link, i) => (
                    <div 
                        key={i}
                        className="flex flex-col w-auto ss:flex-row items-center ss:w-full ss:space-x-5"
                    >
                        <NavLink 
                            to={link.to}
                            className={({isActive}) => `h-[50px] w-[50px] ss:h-[35px] ss:w-[35px] flex justify-center items-center rounded-full border border-LightGray text-LightGray font-bold ${isActive ? "bg-LightBlue text-black" : ""}`}
                            onClick={() => {
                                emptyAddOnData(link);
                            }}
                        >
                            {i + 1}
                        </NavLink>
                        <NavLink 
                            to={link.to}
                            onClick={() => {
                                emptyAddOnData(link)
                            }}
                            className="hidden ss:flex"
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