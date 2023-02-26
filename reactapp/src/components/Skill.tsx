import React from 'react'

const Skill = () => {
  return (
    <section className='text-gray-700 border-t border-gray-200' id='skill'>
    <div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
      {/* leftsiedeタグ */}
        <div className='text-center mb-20 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
          <img src="img/pc.jpg" alt=""  className='rounded text-sm'/>
        </div>
        {/* right side */}
        <div className='lg:pl-10 lg:py-6 w-full lg:w-1/3 text-center lg:text-left'>
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10">
            My Skills
          </h1>
          <div className='w-full '>
              <h2>HTML</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width:"85%"}}>85%</div>
              </div>
              <h2 className='mt-4'>CSS</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width:"60%"}}>60%</div>
              </div>
              <h2 className='mt-4'>JavaScript</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width:"50%"}}>50%</div>
              </div>
              <h2 className='mt-4'>TypeScript</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width:"80%"}}>80%</div>
              </div>
          </div>
        </div>
    </div>
</section >

  )
}

export default Skill