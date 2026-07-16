import React from 'react'

function About() {
  return (
    <div className='flex flex-col items-center space-y-5 font-Roboto text-white [&_p]:mt-3 bg-gray-200'>
      <div className='w-50 h-50 bg-amber-600'>
        <p className='text-center'>Social Enterprise with artisan miners</p>
      </div>
      <div className='w-50 h-50 bg-amber-500'>
        <p className='text-center'>Social Enterprise with fairminded miners</p>
      </div>
      <div className='w-50 h-50 bg-amber-400'>
        <p className='text-center'>Plant Expansion</p>
      
      </div>
    </div>
  )
}

export default About