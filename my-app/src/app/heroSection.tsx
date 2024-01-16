import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className="flex w-full h-[90vh] bg-pink-300 overflow-hidden">
        <div className="flex flex-col mx-auto my-auto w-6/12">
            <h1 className='mx-auto w-9/12 text-xl mb-6'>Hello Amigo,</h1>
            <h1 className='mx-auto w-9/12 text-2xl'>Unlock the door to <span className='text-green-600 font-bold'>effortless learning </span> and embark on a journey of <span className='text-green-600 font-bold'>academic excellence</span> with us.</h1>
        </div>
        <div className='w-6/12'>
        <img className='bg-black w-full h-full' src="" alt="" />
        </div>
      </div>
    </>
  )
}

export default HeroSection
