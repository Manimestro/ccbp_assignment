import React from 'react'
import { MdFamilyRestroom } from "react-icons/md";
import Eligibility from '../Eligibility';

export const WhyChooseUS = () => {
  return (
    <div className='my-10 px-10'>
        <h1 className=' text-center  text-[35px]  '
        >Why Choose US?</h1>
        <div className='bg-[#6438f5]  mx-auto h-[4px] mt-[1px] w-[80px]'/>
<div className='md:flex grid my-5  gap-10'>
            {
              new Array(3).fill("x").map(

                (ele,i)=>{

                 return  <div key={i} className='  text-center flex flex-col text-black bg-[#b6daf4]  rounded-md  w-fit p-2
                  shadow-md'>
                    <div className='mx-auto'>
                      <MdFamilyRestroom className='w-10 h-10'/>
                      </div>

                    <p>Card Lorem</p>
                    <p className='text-sm'>

                    Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
                    </p>
                    </div>
                }
              )
            }


            </div>

            <Eligibility/>
    </div>
  )
}
