import React, { useState } from 'react'
import './header.css'
import { RxCross2 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
export const Header = () => {
    const [open,setOpen] = useState(false)
const handleClick = ()=>{
    setOpen(open=>!open)
}
  return (
    <div className='  px-3 sm:px-10 bg-[#6438f5] text-white font-medium text-lg py-2'>
        <div className='hidden md:flex max-w-[90vw] w-full  justify-between items-center'>
        <h1 className='text-center'>
    Title
</h1>
<div className='flex gap-10'>
    <div>
        Section1
    </div>
    <div>
        Section2
    </div>
    <div>
        Section3
    </div>
    <div>
        Section4
    </div>
</div>
<button className=' bg-white w-24 rounded-md text-[#6438f5] py-1   px-4'>
    Login
</button>
        </div>
        <div className='flex md:hidden max-w-[90vw] w-full  justify-between items-center'>
<button onClick={handleClick} className='' >
<IoMdMenu className='w-8 h-8'/>
</button>
        <h1 className='text-center'>
    Title

</h1>
<div className={` transition-all duration-150 w-[50vw] p-6 absolute ${open?"":"-translate-x-[100%]"} h-screen  bg-[#6438f5] top-0 left-0 gap-10`}>
<p onClick={handleClick} className=' cursor-pointer'>
    <RxCross2 className='w-6 h-6 ml-auto'/>
</p>
<div className=' flex flex-col gap-4 my-[30px]'>
<div>
        Section1
    </div>
    <div>
        Section2
    </div>
    <div>
        Section3
    </div>
    <div>
        Section4
    </div>
</div>

</div>
<button className=' bg-white w-24 rounded-md text-[#6438f5] py-1   px-4'>
    Login
</button>
        </div>
    </div>
  )
}
