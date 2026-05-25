import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#2563eb] rounded-[40px] mx-4 md:mx-8 lg:mx-12 mt-6 shadow-2xl'>

      {/* Background Blur Effects */}
      <div className='absolute top-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-0 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl'></div>

      <div className='relative flex flex-col-reverse md:flex-row items-center px-6 md:px-14 lg:px-24 py-14 md:py-20'>

        {/* -------- Left Content -------- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='md:w-1/2 flex flex-col items-start gap-7 z-10'
        >

          {/* Badge */}
          <div className='flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm shadow-lg'>
            <span className='w-2 h-2 bg-green-400 rounded-full'></span>
            Trusted by 10,000+ Patients
          </div>

          {/* Heading */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight'>
            Find & Book <br />
            <span className='text-cyan-300'>
              Trusted Doctors
            </span>
          </h1>

          {/* Description */}
          <p className='text-gray-200 text-base md:text-lg leading-relaxed max-w-xl'>
            Easily connect with experienced doctors, explore specialties,
            and schedule appointments seamlessly — all in one modern healthcare platform.
          </p>

          {/* Users */}
          <div className='flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-4 rounded-2xl shadow-lg'>
            <img
              className='w-28'
              src={assets.group_profiles}
              alt=""
            />
            <div>
              <p className='text-white font-semibold text-sm md:text-base'>
                200+ Expert Doctors
              </p>
              <p className='text-gray-300 text-sm'>
                Across multiple specialties
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 mt-2'>

            <a
              href="#speciality"
              className='group flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300'
            >
              Book Appointment
              <img
                className='w-4 group-hover:translate-x-1 transition-all duration-300'
                src={assets.arrow_icon}
                alt=""
              />
            </a>

            <button className='px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300'>
              Explore Doctors
            </button>

          </div>
        </motion.div>

        {/* -------- Right Image -------- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='md:w-1/2 relative flex justify-center mb-10 md:mb-0'
        >
          {/* Glow */}
          <div className='absolute w-[420px] h-[420px] bg-cyan-400/20 rounded-full blur-3xl'></div>
          <img
            className='relative w-full max-w-md lg:max-w-xl object-contain drop-shadow-2xl'
            src={assets.header_img}
            alt=""
          />
          {}
          <div className='absolute bottom-8 left-0 md:left-10 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-4 rounded-2xl shadow-2xl'>
            <p className='text-white font-semibold text-lg'>
              24/7 Support
            </p>
            <p className='text-gray-300 text-sm'>
              Instant healthcare assistance
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export default Header