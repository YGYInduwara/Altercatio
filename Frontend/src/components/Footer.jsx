import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            {/**---------------------Left------------------------- */}
            <div>
                <img className="mb-5 w-40" src={assets.Dlogo} alt="" />
                <p className="w-full md:w-2/3 text-gray-600 leading-6">Celebrate the spirit of debate by supporting a tournament that brings together the past and future. Your contribution helps us create a platform where seasoned debaters reunite and inspire the next generation to carry forward the legacy of excellence</p>

            </div>

            {/**---------------------Center----------------------- */}
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>

            </div>

            {/**---------------------Right------------------------- */}
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li>+94-754-xxx-0960</li>
                    <li>ceylondebatingleague@gmail.com</li>
                </ul>

            </div>
        </div>
        <div>
            {/**----------------------copyright text---------------------*/}
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2024@ CDL2025 - All Rights Reserved.</p>
        </div>
    </div>
  )
}
export default Footer