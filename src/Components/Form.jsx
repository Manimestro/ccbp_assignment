import React from 'react'

export const Form = () => {
  return (
    <div className=' rounded-md shadow-md border-t-[3px] border-t-[#6438f5] bg-white px-5 py-4 text-center md:w-[40%]'>
        <h1 className=''>Lorem ipsum dolor sit amet consectetur adipisicing  </h1>
            <div className='grid my-4   gap-5'>
        <input className='border-gray-300 h-[34px]  border rounded-md bg-gray-50 text-black'/>
        <input className='border-gray-300 h-[34px]  border rounded-md bg-gray-50 text-black'/>
        <input className='border-gray-300 h-[34px]  border rounded-md bg-gray-50 text-black'/>
        <input className='border-gray-300 h-[34px]  border rounded-md bg-gray-50 text-black'/>

        <button className=' bg-[#6438f5] text-white font-medium py-2 rounded-md'>
                Submit
        </button>
    </div>
    </div>

  )
}
