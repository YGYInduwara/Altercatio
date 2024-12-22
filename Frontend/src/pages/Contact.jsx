import React from 'react'
import { assets } from '../assets/assets'

const contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span>
        </p>
      </div>        

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p>We’d love to hear from you! Whether you have questions about CDL 2025, want to join as a participant, or are looking for sponsorship opportunities, we’re here to help. Feel free to reach out using any of the following channels:</p>
          <p className='font-semibold text-lg text-gray-600'>Get in Touch</p>
          <p className='text-gray-500'>Tel:(+94) 77 777 7777 
            <br />Facebook:<a href="">facebook.com/ceylondebatingleague</a>
            <br />Instagram:<a href="">@ceylondebatingleague</a>
          </p>
          
          <p className='font-semibold text-lg text-gray-600'>Organizers at CDL2025</p>
          <p className='text-gray-500'>Learn more about our teams and Join with us</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default contact