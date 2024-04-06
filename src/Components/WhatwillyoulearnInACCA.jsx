import React from 'react'

export const WhatwillyoulearnInACCA = () => {
  return (
    <div className='my-[100px] px-10'>
        <h1 className=' text-center  text-[35px] '
        >What will you learn In ACCA ?</h1>
        <div className='bg-[#6438f5]  mx-auto h-[4px] mt-[1px] w-[80px]'/>

<div className='lg:flex grid my-5  gap-10'>
            {
              new Array(3).fill("x").map(

                (ele,i)=>{

                 return  <div key={i} className='  mx-auto rounded-md  text-center flex flex-col text-black bg-[#b6daf4]    w-fit
                  shadow-md'>
                    <div className='  '>
                    <h1 className='text-sm text-white rounded-t-md py-3 bg-[#6438f5]'> Card Lorem</h1>
                      </div>

<div className='h-[300px]'>

<ul  className=' grid gap-5 text-sm text-center p-3'>
<li > <div className='h-1 w-1 inline-block  mr-1 mb-1 bg-black rounded-full'/> Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem</li>
<li > <div className='h-1 w-1 inline-block  mr-1 mb-1 bg-black rounded-full'/> Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem</li>
<li > <div className='h-1 w-1 inline-block  mr-1 mb-1 bg-black rounded-full'/> Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem</li>
<li > <div className='h-1 w-1 inline-block  mr-1 mb-1 bg-black rounded-full'/> Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem</li>
</ul>

</div>

                    <div className='  '>
                    <h1 className='text-sm text-white rounded-b-md py-3 bg-[#6438f5]'> Card Lorem</h1>
                      </div>
                    </div>
                }
              )
            }


            </div>


    </div>
  )
}