import React from 'react'

const Team = () => {
  return (
    <div className='mt-40 flex-col'>
      {/* <h1 className='text-2xl text-black uppercase'>Team</h1> */}
      <h1 className="text-black text-4xl font-semibold mb-5">Feedback</h1>
      <div className="flex flex-col">
      {/* <input className='w-full h-40 '/> */}
      <textarea id="w3review" className='w-full border rounded-lg px-2 py-4' rows={3}></textarea>
      <div className="flex justify-end w-full mx-auto my-4">
      <button className=' bg-blue-500 rounded-md px-5 py-1 text-white'>Submit</button>
      </div>
      </div>
    </div>
  )
}

export default Team
