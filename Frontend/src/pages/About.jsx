/**import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        </div>

        <div className='flex flex-col justify-center gap-6 text-sm text-gray-600 md:w-2/4'>
          <p>Welcome to CDL 2024, the ultimate platform for passionate debaters and critical thinkers to showcase their skills, inspire dialogue, and foster intellectual growth. Since its inception, CDL has been dedicated to celebrating the art of debate, bringing together diverse voices from across the globe in a competitive yet collaborative environment.</p>
          <p>At CDL, we envision a world where debate transcends boundaries, empowering individuals to challenge ideas, explore perspectives, and embrace innovation. We aim to cultivate a culture of constructive dialogue that inspires future leaders and thinkers.</p>
            <b className='text-gray-800'>Get Involved</b>
          <p>Whether you're a seasoned debater, a curious newcomer, or an avid supporter of intellectual discourse, CDL 2024 has something for you. Join us to compete, collaborate, and contribute to a brighter future shaped by thoughtful discussion and respectful debate.</p>
        </div>

    </div>
  )
}

export default About
**/
import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="px-6 py-10">
      {/* Heading */}
      <div className="text-center text-2xl pb-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      {/* Flex Container for Image and Text */}
      <div className="my-10 flex flex-col md:flex-row items-center gap-12">
        {/* Left-Side Image */}
        <img
          className="w-full md:max-w-[360px] rounded-lg"
          src={assets.about_image}
          alt="About CDL"
        />

        {/* Right-Side Text */}
        <div className="flex flex-col gap-6 text-sm text-gray-600 md:w-2/3">
          <p>
            Welcome to CDL 2024, the ultimate platform for passionate debaters and critical thinkers to showcase their skills, inspire dialogue, and foster intellectual growth. Since its inception, CDL has been dedicated to celebrating the art of debate, bringing together diverse voices from across the globe in a competitive yet collaborative environment.
          </p>
          <p>
            At CDL, we envision a world where debate transcends boundaries, empowering individuals to challenge ideas, explore perspectives, and embrace innovation. We aim to cultivate a culture of constructive dialogue that inspires future leaders and thinkers.
          </p>
          <b className="text-gray-800">Get Involved</b>
          <p>
            Whether you're a seasoned debater, a curious newcomer, or an avid supporter of intellectual discourse, CDL 2024 has something for you. Join us to compete, collaborate, and contribute to a brighter future shaped by thoughtful discussion and respectful debate.
          </p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>
        WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> 
        </p>
        </div>

        <div className='flex flex-col md:flex-row mb-20'>

          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Top-notch Competition:</b>
            <p>Compete against the best debaters from around the Island.</p>
          </div>
 
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Global Networking:</b>
            <p>Connect with a vibrant community of peers, mentors, and thought leaders.</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Unforgettable Experience:</b>
            <p>Be part of a prestigious event that challenges your intellect and enhances your public speaking skills.</p>
          </div>

        </div>



    </div>
  )
}

export default About

