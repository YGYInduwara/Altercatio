import { assets } from "../assets/assets";


const Banner = () => {
  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
      {/* Left Section */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-sec">
            <p>Join with CDL 2025</p>
            <p className="mt-4">Relive the passion, reignite the spirit.</p>
            <br/>

            {/* my customization */}
        
        <div className="grid grid-cols-2 gap-4">
        <div>
            <h2 className="text-6xl font-serif text-gray-900">16</h2>
            <p className="text-gray-300 text-sm" >Teams</p>
          </div>
          <div>
            <h2 className="text-6xl font-serif text-gray-900">100+</h2>
            <p className="text-gray-300 text-sm">Debaters</p>
          </div>
          <div>
            <h2 className="text-6xl font-serif text-gray-900">500+</h2>
            <p className="text-gray-300 text-sm">Participants</p>
          </div>
          <div>
            <h2 className="text-6xl font-serif text-gray-900">10+</h2>
            <p className="text-gray-300 text-sm">Title here</p>
          </div>
        </div>
          
           {/* my customization */}
      </div>

      {/* Right Section */}
        </div>
        
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img className="w-full absolute bottom-0 right-0 max-w-md" src={assets.appointment_img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
