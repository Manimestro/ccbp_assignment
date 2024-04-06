import React from 'react'

 const  Eligibility = () => {
  return (
    <div className='my-10 '>
                  <div className='grid md:flex my-5 gap-5'>
            {
              new Array(4).fill("x").map(

                (ele,i)=>{

                 return(
                 <div  className=' rounded-md shadow-md border-t-[3px] border-t-[#6438f5] bg-white px-5 py-4 text-center md:w-[40%]'>
<div key={i} className='   text-sm w-fit p-1 '>
  <h1 className='text-normal font-bold'>Duration</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                    </div>
</div>
                 )
                }
              )
            }


            </div>

    </div>

  )
}

export default Eligibility