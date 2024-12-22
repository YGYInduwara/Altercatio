import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {AppContext} from "../context/AppContext"
import { assets } from "../assets/assets";
import RelatedTeams from "../components/RelatedTeams";

const Appoinment = () => {

    const {docId} = useParams()
    const {doctors, currencySymbol} =useContext (AppContext)

    const [docInfo,setDocInfo] = useState (null)

    const fetchDocInfo = async () =>{
      const docInfo = doctors.find(doc => doc._id === docId)
      setDocInfo(docInfo)
      console.log(docInfo);
    }
    
    useEffect(()=>{
      fetchDocInfo()

    },[doctors,docId])


  return docInfo && (
    <div>
      {/**Team Details */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/** Team Info: name, experience etc */}
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}
             <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
          </div>
{/**-------------------Doctor About---------------- */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About <img src={assets.info_icon} alt="" /></p>
          <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
          </div>
              <p className="text-gray-500 font-medium mt-4">
                Membership fee: <span className="text-gray-600">{currencySymbol}{docInfo.fees}</span></p>
        </div>
      </div>
      <div className="flex justify-center my-6">
  <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full">
    Register as {docInfo.name}
  </button>
</div>
{/**-------------------Listing Related Teams---------------- */}
<RelatedTeams docId={docId} speciality={docInfo.speciality}/>
        
    </div>
  )
}
export default Appoinment