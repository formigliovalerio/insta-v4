import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div>
      
      {/* Left */}

      <div className='flex items-center justify-between max-w-6xl'>

      <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdR4OSPaCJUWNax8htTcthz_0tvjGlGLKOA&usqp=CAU" className='object-contain' width={1000} height={1000}
          />  
        </div>

        <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" className='object-contain' width={1000} height={1000}
          />  
        </div>

        <h1>Right Side</h1>

      </div>


    </div> 
  )
}
