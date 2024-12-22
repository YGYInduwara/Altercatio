import { Link } from "react-router-dom"
import { specialityData } from "../assets/assets"

const SpecialityMenu = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800" id="speciality">
        <h1 className="text-3xl font-medium">Support the Legacy!</h1>
        <p className="sm:w-1/3 text-center text-sm">“Celebrate the spirit of debate by supporting a tournament that brings together the past and future. Your contribution helps us create a platform where seasoned debaters reunite and inspire the next generation to carry forward the legacy of excellence.”</p>
        <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
            {specialityData.map((item,index)=>(
                <Link onClick={()=>scrollTo(0,0)} className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" key={index} to={'/sponsors/${item.speciality}'}>
                <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
                <p>{item.speciality}</p>
                </Link>
            ))}
        </div>

    </div>
  )
}
export default SpecialityMenu