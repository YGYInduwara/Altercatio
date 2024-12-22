import {assets} from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/**----------------------------Left Side------------------------------ */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-sec font-semibold leading-tight md:leading-tight lg:leading-tight'>
                Ceylon Debating League <br />CDL 2025
            </p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-sec text-sm font-light'>
                <img className='w-28' src={assets.group_profiles} alt="" />
                <p>Legacy Speaks Legends Stand !<br className='hidden sm:block' /> Registrations are now open</p>
            </div>
            <a href="#type" className='flex items-center gap-2 bg-sec px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                Register Now <img className='w-3' src={assets.arrow_icon} alt="" />
            </a>

        </div>

        {/**---------------------------Right Side----------------------------- */}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.abcd} alt="" />

        </div>
    </div>
  )
}
export default Header